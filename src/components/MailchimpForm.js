import React from 'react';

export const MailchimpForm = ({ onValidated, email }) => {
  const handleFormSubmit = () => {
    // Cek apakah email valid
    if (!email || email.indexOf("@") === -1) {
      onValidated("error", "Please enter a valid email address.");
      return;
    }

    // URL API Mailchimp, sesuaikan <dc> dan <audience_id> dengan konfigurasi Anda
    const url = "https://<dc>.api.mailchimp.com/3.0/lists/<audience_id>/members";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer <your_api_key>`, // Ganti dengan API Key Anda
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
      }),
    })
      .then((response) => {
        if (response.ok) {
          onValidated("success", "Subscription successful!");
        } else {
          // Menangani error dari Mailchimp API
          response.json().then((error) => {
            const message = error.detail || "Failed to subscribe. Please try again.";
            onValidated("error", message);
          });
        }
      })
      .catch(() => {
        // Menangani error jaringan
        onValidated("error", "An error occurred. Please try again later.");
      });
  };
};
