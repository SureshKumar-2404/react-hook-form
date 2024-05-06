import React from 'react';

function Policy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Terms and Policy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-2">Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern our relationship with you in relation to this website.</p>
        <p className="mb-2">The term "our" or "us" refers to the owner of the website. The term "you" refers to the user or viewer of our website.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Privacy Policy</h2>
        <p className="mb-2">Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.</p>
        <p className="mb-2">We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Cookies Policy</h2>
        <p className="mb-2">Our website uses cookies. By using our website and agreeing to this policy, you consent to our use of cookies in accordance with the terms of this policy.</p>
        <p className="mb-2">The cookies that we use allow us to recognize and count the number of visitors and to see how visitors move around the site when they are using it. This helps us to improve the way our website works, for example by making sure users are finding what they need easily.</p>
      </section>

      {/* Add more sections for different policies or terms as needed */}
    </div>
  );
}

export default Policy;
