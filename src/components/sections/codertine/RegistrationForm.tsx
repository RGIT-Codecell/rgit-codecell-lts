"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Import the custom Button
import { ArrowRight, Loader2, X, Copy } from "lucide-react"; // Import icons

// Common styles for input fields
const inputStyles =
  "w-full bg-black border-[0.5px] border-foreground/50 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-foreground transition-colors placeholder-foreground/50";
const labelStyles = "block text-sm font-medium text-foreground/70 mb-2";
const selectStyles = `${inputStyles} appearance-none bg-[url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")] bg-no-repeat bg-[right_0.75rem_center] bg-[length:1em_1em] pl-4 pr-10 text-foreground/50`;

// Define an interface for the form's data structure
interface IFormData {
  name: string;
  phone: string;
  email: string;
  college: string;
  branch: string;
  year: string;
  payment_ss: File | null;
  whatsappConfirm: boolean;
}

// Define a type for the errors object
type IFormErrors = Partial<Record<keyof IFormData, string>>;

export default function RegistrationForm() {
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    phone: "",
    email: "",
    college: "",
    branch: "",
    year: "",
    payment_ss: null,
    whatsappConfirm: false,
  });

  const [errors, setErrors] = useState<IFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState<string>("");
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const branchOptions = [
    "Computer Science",
    "Information Technology",
    "AI & Data Science",
    "Electronics & Telecommunication",
    "Mechanical Engineering",
    "Other",
  ];
  const yearOptions = [
    "First Year (FE)",
    "Second Year (SE)",
    "Third Year (TE)",
    "Final Year (BE)",
  ];

  const upiIds = {
    pay1: "sahilmalgundkar321@okicic",
    pay2: "manasdeshpande06@oksbi",
  };

  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const copyUpiId = async (upiId: string, qrName: string) => {
    try {
      await navigator.clipboard.writeText(upiId);
      setCopySuccess(qrName);
      setTimeout(() => setCopySuccess(""), 2000);
    } catch (err) {
      console.error("Failed to copy UPI ID:", err);
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = upiId;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        setCopySuccess(qrName);
        setTimeout(() => setCopySuccess(""), 2000);
      } catch (fallbackErr) {
        console.error("Fallback copy failed:", fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  };

  const validate = () => {
    const newErrors: IFormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required.";
    if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email address.";
    if (!formData.college.trim())
      newErrors.college = "College Name is required.";
    if (!formData.branch) newErrors.branch = "Please select your branch.";
    if (!formData.year) newErrors.year = "Please select your year of study.";
    if (!formData.payment_ss) {
      newErrors.payment_ss = "Please upload a payment screenshot.";
    } else if (formData.payment_ss.size > 2 * 1024 * 1024) {
      newErrors.payment_ss = "File size cannot exceed 2MB.";
    } else if (
      !["image/jpeg", "image/png", "image/jpg"].includes(
        formData.payment_ss.type
      )
    ) {
      newErrors.payment_ss =
        "Invalid file type. Please upload a JPG or PNG image.";
    }
    if (!formData.whatsappConfirm)
      newErrors.whatsappConfirm =
        "You must join the WhatsApp group to register.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (errors[name as keyof IFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }

    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "file") {
      const { files } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: files ? files[0] : null }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Clear previous status
    setSubmitStatus({ type: null, message: '' });

    if (validate()) {
      setIsSubmitting(true);

      try {
        // Create FormData object
        const formDataToSubmit = new FormData();
        formDataToSubmit.append('name', formData.name);
        formDataToSubmit.append('phone', formData.phone);
        formDataToSubmit.append('email', formData.email);
        formDataToSubmit.append('college', formData.college);
        formDataToSubmit.append('branch', formData.branch);
        formDataToSubmit.append('year', formData.year);
        formDataToSubmit.append('whatsappConfirm', formData.whatsappConfirm.toString());

        if (formData.payment_ss) {
          formDataToSubmit.append('payment_ss', formData.payment_ss);
        }

        // Submit to API
        const response = await fetch('/api/codertine', {
          method: 'POST',
          body: formDataToSubmit,
        });

        const result = await response.json();

        if (response.ok && result.success) {
          setSubmitStatus({
            type: 'success',
            message: result.message || 'Registration successful! You will receive confirmation soon.'
          });


          // ✅ Add this alert
          alert("Join our WhatsApp group for updates. You will be added to the group once the admin confirms your payment. Your confirmation status will also be visible there.");

          // Reset form after successful submission
          setFormData({
            name: "",
            phone: "",
            email: "",
            college: "",
            branch: "",
            year: "",
            payment_ss: null,
            whatsappConfirm: false,
          });

          // Reset file input
          const fileInput = document.getElementById('payment_ss') as HTMLInputElement;
          if (fileInput) fileInput.value = '';

        } else {
          setSubmitStatus({
            type: 'error',
            message: result.error || 'Registration failed. Please try again.'
          });
        }
      } catch (error) {
        console.error('Submission error:', error);
        setSubmitStatus({
          type: 'error',
          message: 'Network error. Please check your connection and try again.'
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      console.log("Form has errors:", errors);
    }
  }; return (
    <section
      id="register"
      className="relative isolate bg-transparent py-20 px-4"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column: Information */}
        <div className="md:w-[400px]">
          <h2 className="text-4xl md:text-5xl font-porticoRough text-white  text-center lg:text-left ">
            Register for
          </h2>
          <h2 className="text-5xl md:text-8xl font-porticoRough text-white text-center lg:text-left ">
            CODERTINE 6.0
          </h2>
          <p className="text-base text-foreground/70 mb-4">
            Secure your spot in the ultimate coding showdown.
          </p>
          <div>
            <h4 className="font-bold text-white text-lg">Quick Reminders:</h4>
            <ul className="list-disc list-inside text-foreground/70 mt-2 text-sm space-y-1">
              <li>Ensure your email matches your CodeChef account.</li>
              <li>Joining the WhatsApp group is mandatory for updates.</li>
            </ul>
          </div>

          {/* Payment QR Codes Section */}
          <div className="mt-8">
            <h4 className="font-bold text-white text-lg mb-4">Payment QR Codes:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="text-center">
                <div
                  className="bg-white p-3 rounded-lg cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => openModal("/data/codertine25/pay1.jpg")}
                >
                  <img
                    src="/data/codertine25/pay1.jpg"
                    alt="Payment QR Code 1"
                    className="w-full h-auto max-w-[200px] mx-auto"
                  />
                </div>
                <button
                  onClick={() => copyUpiId(upiIds.pay1, "pay1")}
                  className="mt-2 flex items-center justify-center gap-1 text-xs text-white hover:text-foreground/80 transition-colors bg-foreground/10 hover:bg-foreground/20 px-3 py-1 rounded-md mx-auto"
                >
                  <Copy className="w-3 h-3" />
                  {copySuccess === "pay1" ? "Copied!" : "Copy UPI ID"}
                </button>
              </div>
              <div className="text-center">
                <div
                  className="bg-white p-3 rounded-lg cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => openModal("/data/codertine25/pay2.png")}
                >
                  <img
                    src="/data/codertine25/pay2.png"
                    alt="Payment QR Code 2"
                    className="w-full h-auto max-w-[200px] mx-auto"
                  />
                </div>
                <button
                  onClick={() => copyUpiId(upiIds.pay2, "pay2")}
                  className="mt-2 flex items-center justify-center gap-1 text-xs text-white hover:text-foreground/80 transition-colors bg-foreground/10 hover:bg-foreground/20 px-3 py-1 rounded-md mx-auto"
                >
                  <Copy className="w-3 h-3" />
                  {copySuccess === "pay2" ? "Copied!" : "Copy UPI ID"}
                </button>
              </div>
            </div>
            <p className="text-xs text-foreground/70 mt-2 text-center">
              Click on QR codes to view larger. Scan any of the above QR codes to make payment, then upload the screenshot below.
            </p>
            <p className="text-xs text-foreground/70 mt-2 text-center">Feel Free to contact for any queries.</p>
            <p className="text-xs text-foreground/70 mt-2 text-center">Sahil:- <a href="tel:+919607055655">+91 9607055655</a><br/> Dhruv:- <a href="tel:+919321781063">+91 9321781063</a></p>
          </div>
        </div>

        {/* Right Column: The Form */}
        <div className="bg-black p-8 rounded-xl border border-foreground/20 shadow-lg">
          {/* Success/Error Message */}
          {submitStatus.type && (
            <div className={`mb-6 p-4 rounded-lg ${submitStatus.type === 'success'
                ? 'bg-green-900/50 border border-green-700 text-green-100'
                : 'bg-red-900/50 border border-red-700 text-red-100'
              }`}>
              <p className="text-sm">{submitStatus.message}</p>
            </div>
          )}

          <form
            noValidate
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4"
          >
            {/* ... all your input fields ... */}
            <div>
              <label htmlFor="name" className={labelStyles}>
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className={inputStyles}
                placeholder="Your Name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor="phone" className={labelStyles}>
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className={inputStyles}
                placeholder="+91 98765 43210"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className={labelStyles}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputStyles}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="college" className={labelStyles}>
                College Name
              </label>
              <input
                type="text"
                id="college"
                name="college"
                required
                value={formData.college}
                onChange={handleChange}
                className={inputStyles}
                placeholder="Your College"
              />
              {errors.college && (
                <p className="text-red-500 text-xs mt-1">{errors.college}</p>
              )}
            </div>
            <div>
              <label htmlFor="branch" className={labelStyles}>
                Branch
              </label>
              <select
                id="branch"
                name="branch"
                required
                value={formData.branch}
                onChange={handleChange}
                className={selectStyles}
              >
                <option value="" disabled>
                  Select your branch
                </option>
                {branchOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.branch && (
                <p className="text-red-500 text-xs mt-1">{errors.branch}</p>
              )}
            </div>
            <div>
              <label htmlFor="year" className={labelStyles}>
                Year of Study
              </label>
              <select
                id="year"
                name="year"
                required
                value={formData.year}
                onChange={handleChange}
                className={selectStyles}
              >
                <option value="" disabled>
                  Select your year
                </option>
                {yearOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.year && (
                <p className="text-red-500 text-xs mt-1">{errors.year}</p>
              )}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="payment_ss" className={labelStyles}>
                Payment Screenshot
              </label>
              <input
                type="file"
                id="payment_ss"
                name="payment_ss"
                required
                onChange={handleChange}
                accept="image/png, image/jpeg, image/jpg"
                className="block w-full text-sm text-foreground/70 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-white file:text-black"
              />
              {errors.payment_ss && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.payment_ss}
                </p>
              )}
            </div>
            <div className="sm:col-span-2 flex items-center gap-3">
              <input
                id="whatsappConfirm"
                name="whatsappConfirm"
                type="checkbox"
                required
                checked={formData.whatsappConfirm}
                onChange={handleChange}
                className="h-5 w-5 rounded bg-slate-800 border-slate-600 text-blue-600 focus:ring-blue-500"
              />
              <div>
                <label
                  htmlFor="whatsappConfirm"
                  className="text-sm text-foreground/70"
                >
                  I have joined the mandatory WhatsApp group.
                </label>
                <p className="text-xs text-foreground/70 mt-1">
                  If not,{" "}
                  <a
                    href="https://chat.whatsapp.com/H4iH9jBJf8U12Ylk36lubO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline font-semibold"
                  >
                    click here to join.
                  </a>
                </p>
              </div>
            </div>
            {errors.whatsappConfirm && (
              <p className="text-red-500 text-xs -mt-2 sm:col-span-2">
                {errors.whatsappConfirm}
              </p>
            )}

            {/* --- NEW BUTTON --- */}
            <div className="sm:col-span-2 mt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
                size={"lg"}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Registration
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>


          </form>
        </div>
      </div>

      {/* Modal for QR Code */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg p-4 max-w-md w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full p-1 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="mt-6">
              <img
                src={modalImage}
                alt="Payment QR Code - Large View"
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center text-gray-600 text-sm mt-3">
                Scan this QR code to make payment
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
