import { useEffect, useRef, useState, type FormEvent } from "react";
import { submitLead } from "@/lib/leads";
import { trackEvent } from "@/lib/analytics";
import { company, telHref, whatsappHref } from "@/data/company";
import "./book.css";

const DAY = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const CITIES = ["Pune", "Mumbai", "Navi Mumbai", "Thane", "Panvel", "Other"];
const SLOTS = ["9am to 12pm", "12pm to 3pm", "3pm to 6pm"];

type Step = 1 | 2 | 3;
type DayChoice = "" | "today" | "tomorrow" | "pick";
type Errors = { name?: string; phone?: string; day?: string; slot?: string };

const iso = (x: Date) => `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, "0")}-${String(x.getDate()).padStart(2, "0")}`;
const nice = (x: Date) => `${DAY[x.getDay()]} ${x.getDate()} ${MON[x.getMonth()]}`;

interface Props {
  open: boolean;
  /** Changes on every open so the form starts fresh. */
  session: number;
  work?: string;
  source: string;
  onClosed: () => void;
}

export function BookCallDialog({ open, session, work: workDefault, source, onClosed }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLSelectElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);

  const [step, setStep] = useState<Step>(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Pune");
  const [day, setDay] = useState<DayChoice>("");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [work, setWork] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; when: string; slot: string; wa: string } | null>(null);
  const [now, setNow] = useState(() => new Date());

  // Open (and reset) on each new session.
  useEffect(() => {
    const d = dialogRef.current;
    if (!d || !open) return;
    setStep(1);
    setName("");
    setPhone("");
    setCity("Pune");
    setDay("");
    setDate("");
    setSlot("");
    setWork(workDefault ?? "");
    setErrors({});
    setSending(false);
    setResult(null);
    setNow(new Date());
    if (!d.open) d.showModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  // Close the native dialog if the parent closes it.
  useEffect(() => {
    const d = dialogRef.current;
    if (d && !open && d.open) d.close();
  }, [open]);

  // Move focus to the first thing of each step.
  useEffect(() => {
    if (!open) return;
    const t = step === 1 ? nameRef.current : step === 2 ? cityRef.current : doneRef.current;
    t?.focus();
  }, [step, session, open]);

  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const todayIsSunday = now.getDay() === 0;
  const tomIsSunday = tomorrow.getDay() === 0;

  const checkName = (v = name) => {
    const ok = v.trim().length > 1;
    setErrors((e) => ({ ...e, name: ok ? undefined : "Enter your name so we know who to ask for." }));
    return ok;
  };
  const checkPhone = (v = phone) => {
    const ok = /^[6-9]\d{9}$/.test(v.replace(/\D/g, ""));
    setErrors((e) => ({ ...e, phone: ok ? undefined : "Enter a 10-digit Indian mobile number." }));
    return ok;
  };

  const next = () => {
    const a = checkName();
    const b = checkPhone();
    if (a && b) setStep(2);
    else (a ? phoneRef.current : nameRef.current)?.focus();
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (sending) return;
    let when = "";
    let ok = true;
    const errs: Errors = {};
    if (!day) {
      errs.day = "Choose today, tomorrow or a date.";
      ok = false;
    } else if (day === "pick") {
      const x = date ? new Date(date + "T00:00") : null;
      if (!x) {
        errs.day = "Pick a date.";
        ok = false;
      } else if (x.getDay() === 0) {
        errs.day = "That date is a Sunday. Pick Monday to Saturday.";
        ok = false;
      } else when = "on " + nice(x);
    } else when = day;
    if (!slot) {
      errs.slot = "Choose a time.";
      ok = false;
    }
    setErrors((p) => ({ ...p, day: errs.day, slot: errs.slot }));
    if (!ok) return;

    const cleanName = name.trim();
    const digits = phone.replace(/\D/g, "");
    setSending(true);
    const sent = await submitLead({
      name: cleanName,
      phone: "+91 " + digits,
      city,
      preferredDay: when,
      preferredSlot: slot,
      message: work.trim() || undefined,
      source,
      subject: "Call booking: Fine Glaze website",
      fromName: "Fine Glaze Book a call",
    });
    trackEvent("book_call_submit", { source, city, success: sent });
    const wa = whatsappHref(
      `Hi Fine Glaze, please call me.\nName: ${cleanName}\nPhone: +91 ${digits}\nCity: ${city}\nWhen: ${when}, ${slot}\nWork: ${work.trim() || "Not given"}`,
    );
    if (!sent && typeof window !== "undefined") window.open(wa, "_blank", "noopener");
    setResult({ ok: sent, when, slot, wa });
    setSending(false);
    setStep(3);
  };

  const close = () => dialogRef.current?.close();

  return (
    <dialog
      ref={dialogRef}
      className="bk"
      aria-labelledby="bk-h"
      onClose={onClosed}
      onClick={(e) => {
        if (e.target === dialogRef.current) close();
      }}
    >
      <div className="bk-in">
        <div className="bk-top">
          <div>
            <h2 id="bk-h" hidden={step === 3}>Book a call</h2>
            <p className="bk-step" aria-live="polite">{step === 3 ? "" : `Step ${step} of 2`}</p>
          </div>
          <button className="bk-x" type="button" aria-label="Close" onClick={close}>&times;</button>
        </div>

        <form onSubmit={onSubmit} noValidate hidden={step === 3}>
          <fieldset hidden={step !== 1}>
            <div>
              <label htmlFor="bk-name">Your name</label>
              <input
                id="bk-name"
                ref={nameRef}
                type="text"
                autoComplete="name"
                value={name}
                aria-describedby="bk-e-name"
                aria-invalid={!!errors.name}
                onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: undefined })); }}
                onBlur={() => { if (name) checkName(); }}
              />
              <p className="bk-err" id="bk-e-name" role="alert">{errors.name}</p>
            </div>
            <div>
              <label htmlFor="bk-phone">Mobile number</label>
              <div className="bk-tel">
                <span aria-hidden="true">+91</span>
                <input
                  id="bk-phone"
                  ref={phoneRef}
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  maxLength={11}
                  value={phone}
                  aria-describedby="bk-e-phone"
                  aria-invalid={!!errors.phone}
                  onChange={(e) => { setPhone(e.target.value); setErrors((p) => ({ ...p, phone: undefined })); }}
                  onBlur={() => { if (phone) checkPhone(); }}
                />
              </div>
              <p className="bk-err" id="bk-e-phone" role="alert">{errors.phone}</p>
            </div>
            <div className="bk-acts">
              <button className="bk-go" type="button" onClick={next}>Choose a time</button>
            </div>
          </fieldset>

          <fieldset hidden={step !== 2}>
            <div>
              <label htmlFor="bk-city">Where is the site?</label>
              <select id="bk-city" ref={cityRef} value={city} onChange={(e) => setCity(e.target.value)}>
                {CITIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div role="group" aria-labelledby="bk-l-day">
              <p className="bk-lab" id="bk-l-day">Day</p>
              <div className="bk-row">
                <label className="bk-chip">
                  <input type="radio" name="bk-day" value="today" checked={day === "today"} disabled={todayIsSunday}
                    onChange={() => { setDay("today"); setErrors((p) => ({ ...p, day: undefined })); }} />
                  <span>{todayIsSunday ? "Today is Sunday" : "Today"}</span>
                </label>
                <label className="bk-chip">
                  <input type="radio" name="bk-day" value="tomorrow" checked={day === "tomorrow"} disabled={tomIsSunday}
                    onChange={() => { setDay("tomorrow"); setErrors((p) => ({ ...p, day: undefined })); }} />
                  <span>{tomIsSunday ? "Tomorrow is Sunday" : "Tomorrow"}</span>
                </label>
                <label className="bk-chip">
                  <input type="radio" name="bk-day" value="pick" checked={day === "pick"}
                    onChange={() => { setDay("pick"); setErrors((p) => ({ ...p, day: undefined })); setTimeout(() => dateRef.current?.focus(), 0); }} />
                  <span>Pick a date</span>
                </label>
              </div>
              <input
                type="date"
                ref={dateRef}
                aria-label="Date"
                hidden={day !== "pick"}
                style={{ marginTop: 8 }}
                min={iso(now)}
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                  const x = e.target.value ? new Date(e.target.value + "T00:00") : null;
                  setErrors((p) => ({ ...p, day: x && x.getDay() === 0 ? "That date is a Sunday. Pick Monday to Saturday." : undefined }));
                }}
              />
              <p className="bk-hint">Monday to Saturday. We do not call on Sundays.</p>
              <p className="bk-err" role="alert">{errors.day}</p>
            </div>
            <div role="group" aria-labelledby="bk-l-slot">
              <p className="bk-lab" id="bk-l-slot">Time</p>
              <div className="bk-row">
                {SLOTS.map((s) => (
                  <label className="bk-chip" key={s}>
                    <input type="radio" name="bk-slot" value={s} checked={slot === s}
                      onChange={() => { setSlot(s); setErrors((p) => ({ ...p, slot: undefined })); }} />
                    <span>{s}</span>
                  </label>
                ))}
              </div>
              <p className="bk-err" role="alert">{errors.slot}</p>
            </div>
            <div>
              <label htmlFor="bk-work">What is the work? <span className="opt">Optional</span></label>
              <input id="bk-work" type="text" placeholder="ACP cladding repair, 12 floors, Baner" value={work} onChange={(e) => setWork(e.target.value)} />
            </div>
            <div className="bk-acts">
              <button className="bk-go" type="submit" disabled={sending} aria-busy={sending}>{sending ? "Booking" : "Book a call"}</button>
              <button className="bk-back" type="button" onClick={() => setStep(1)} disabled={sending}>Back</button>
            </div>
            <p className="bk-note">We call you back the same business day, Monday to Saturday, 9am to 6pm.</p>
          </fieldset>
        </form>

        <div className="bk-done" ref={doneRef} tabIndex={-1} hidden={step !== 3}>
          {result?.ok ? (
            <>
              <h2>Booked.</h2>
              <p>We will call {name.trim()} {result.when}, {result.slot}.</p>
            </>
          ) : result ? (
            <>
              <h2>Not sent yet.</h2>
              <p>We could not send this from the page, so WhatsApp is opening with your details prefilled. Send the message there and we will call {name.trim()} {result.when}, {result.slot}.</p>
              <p><a href={result.wa} target="_blank" rel="noopener noreferrer">Open WhatsApp</a></p>
            </>
          ) : null}
          <div className="bk-acts" style={{ marginTop: 18 }}>
            <button className="bk-go" type="button" onClick={close}>Close</button>
          </div>
        </div>

        <p className="bk-foot">
          Prefer to talk now? <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">WhatsApp</a> or call{" "}
          <b><a href={telHref}>{company.phone.mobileDisplay}</a></b>
        </p>
      </div>
    </dialog>
  );
}
