"use client";

import { FormEvent, useState } from "react";
import { countries } from "./countries";

type SignupFields = {
  firstName: string;
  lastName: string;
  dob: string;
  phoneNumber: string;
  country: string;
};

const emptyForm: SignupFields = {
  firstName: "",
  lastName: "",
  dob: "",
  phoneNumber: "",
  country: "",
};

export default function Signup() {
  const [form, setForm] = useState<SignupFields>(emptyForm);

  function updateField<K extends keyof SignupFields>(
    key: K,
    value: SignupFields[K],
  ) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  const fieldClass =
    "w-full rounded-lg border border-white/40 bg-white/20 px-3 py-2 text-sm text-white outline-none backdrop-blur-md placeholder:text-white/50 focus:border-white/80";

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md space-y-4 rounded-2xl border border-white/25 bg-white/10 p-6 shadow-2xl backdrop-blur-2xl scheme-dark"
    >
      <div className="text-center">
        <h1 className="mt-1 text-xl font-semibold text-white">Sign up</h1>
        <p className="mt-1 text-sm text-white/70">
          Create your DesignerClub account.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block space-y-1.5">
          <span className="text-sm font-medium text-white/80">First name</span>
          <input
            required
            type="text"
            name="firstName"
            autoComplete="given-name"
            value={form.firstName}
            onChange={(event) => updateField("firstName", event.target.value)}
            className={fieldClass}
          />
        </label>

        <label className="block space-y-1.5">
          <span className="text-sm font-medium text-white/80">Last name</span>
          <input
            required
            type="text"
            name="lastName"
            autoComplete="family-name"
            value={form.lastName}
            onChange={(event) => updateField("lastName", event.target.value)}
            className={fieldClass}
          />
        </label>
      </div>

      <label className="block space-y-1.5">
        <span className="text-sm font-medium text-white/80">Date of birth</span>
        <input
          required
          type="date"
          name="dob"
          autoComplete="bday"
          value={form.dob}
          onChange={(event) => updateField("dob", event.target.value)}
          className={fieldClass}
        />
      </label>

      <label className="block space-y-1.5">
        <span className="text-sm font-medium text-white/80">Phone number</span>
        <input
          required
          type="tel"
          name="phoneNumber"
          autoComplete="tel"
          inputMode="tel"
          value={form.phoneNumber}
          onChange={(event) => updateField("phoneNumber", event.target.value)}
          className={fieldClass}
        />
      </label>

      <label className="block space-y-1.5">
        <span className="text-sm font-medium text-white/80">Country</span>
        <select
          required
          name="country"
          autoComplete="country-name"
          value={form.country}
          onChange={(event) => updateField("country", event.target.value)}
          className={fieldClass}
        >
          <option value="" disabled>
            Select a country
          </option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </label>

      <button
        type="submit"
        className="w-full rounded-lg border border-white/30 bg-white/20 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-md hover:bg-white/30"
      >
        Create account
      </button>
    </form>
  );
}
