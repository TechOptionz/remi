'use client';

// The admin sign-in code as four one-digit boxes (like a one-time code): typing moves to the next box, Backspace goes
// back, pasting fills all four, and the form submits itself once the fourth digit is in.
import { useRef, useState } from 'react';

export default function PinBoxes() {
  const [digits, setDigits] = useState(['', '', '', '']);
  const boxes = useRef<(HTMLInputElement | null)[]>([]);

  function fill(next: string[]) {
    setDigits(next);
    if (next.every(Boolean)) {
      const form = boxes.current[0]?.form;
      // let the hidden field update before submitting
      requestAnimationFrame(() => form?.requestSubmit());
    }
  }

  return (
    <div className="adm-otp">
      <input type="hidden" name="pin" value={digits.join('')} />
      {digits.map((d, i) => (
        <input
          key={i}
          ref={el => { boxes.current[i] = el; }}
          value={d}
          aria-label={`Digit ${i + 1}`}
          inputMode="numeric"
          autoComplete={i === 0 ? 'one-time-code' : 'off'}
          maxLength={1}
          autoFocus={i === 0}
          onChange={e => {
            const v = e.target.value.replace(/\D/g, '').slice(-1);
            const next = [...digits];
            next[i] = v;
            if (v && i < 3) boxes.current[i + 1]?.focus();
            fill(next);
          }}
          onKeyDown={e => {
            if (e.key === 'Backspace' && !digits[i] && i > 0) boxes.current[i - 1]?.focus();
          }}
          onPaste={e => {
            const v = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 4);
            if (!v) return;
            e.preventDefault();
            const next = [0, 1, 2, 3].map(k => v[k] ?? '');
            boxes.current[Math.min(v.length, 3)]?.focus();
            fill(next);
          }}
        />
      ))}
    </div>
  );
}
