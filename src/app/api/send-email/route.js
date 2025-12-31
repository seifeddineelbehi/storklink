import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let subject, htmlContent;
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.COMPANY_EMAIL,
    };

    if (formData.formType === "Employer") {
      subject = `🏢 New Employer Inquiry - ${formData.name || "Company"}`;
      htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; }
    .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
    .content { padding: 30px; }
    .section { margin-bottom: 30px; }
    .section-title { color: #667eea; font-size: 18px; font-weight: 600; margin-bottom: 15px; padding-bottom: 8px; border-bottom: 2px solid #667eea; }
    .info-row { display: flex; margin-bottom: 12px; }
    .info-label { font-weight: 600; color: #555; min-width: 180px; }
    .info-value { color: #333; flex: 1; }
    .highlight-box { background: #f8f9fa; border-left: 4px solid #667eea; padding: 15px; margin: 15px 0; }
    .footer { background: #f8f9fa; padding: 20px; text-align: center; color: #666; font-size: 12px; }
    .badge { display: inline-block; background: #667eea; color: white; padding: 4px 12px; border-radius: 12px; font-size: 12px; margin-left: 8px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🏢 New Employer Inquiry</h1>
      <p style="margin: 5px 0 0 0; opacity: 0.9;">From StorkLink Contact Form</p>
    </div>
    
    <div class="content">
      <!-- Company Information -->
      <div class="section">
        <div class="section-title">📋 Company Information</div>
        <div class="info-row">
          <div class="info-label">Company Name:</div>
          <div class="info-value"><strong>${
            formData.name || "Not provided"
          }</strong></div>
        </div>
        <div class="info-row">
          <div class="info-label">Industry/Field:</div>
          <div class="info-value">${formData.industry || "Not provided"}</div>
        </div>
        <div class="info-row">
          <div class="info-label">Contact Person:</div>
          <div class="info-value">${formData.contact || "Not provided"}</div>
        </div>
        <div class="info-row">
          <div class="info-label">Job Title:</div>
          <div class="info-value">${
            formData["job-title-contact"] || "Not provided"
          }</div>
        </div>
        <div class="info-row">
          <div class="info-label">Email:</div>
          <div class="info-value"><a href="mailto:${
            formData.email
          }" style="color: #667eea;">${
        formData.email || "Not provided"
      }</a></div>
        </div>
        <div class="info-row">
          <div class="info-label">Phone:</div>
          <div class="info-value"><a href="tel:${
            formData.phone
          }" style="color: #667eea;">${
        formData.phone || "Not provided"
      }</a></div>
        </div>
        <div class="info-row">
          <div class="info-label">Website:</div>
          <div class="info-value">${
            formData.website
              ? `<a href="${formData.website}" style="color: #667eea;" target="_blank">${formData.website}</a>`
              : "Not provided"
          }</div>
        </div>
      </div>

      <!-- Position Details -->
      <div class="section">
        <div class="section-title">💼 Position Details</div>
        <div class="info-row">
          <div class="info-label">Job Title:</div>
          <div class="info-value"><strong>${
            formData["position-job-title"] || "Not provided"
          }</strong></div>
        </div>
        <div class="info-row">
          <div class="info-label">Department:</div>
          <div class="info-value">${formData.department || "Not provided"}</div>
        </div>
        <div class="info-row">
          <div class="info-label">Employment Type:</div>
          <div class="info-value">${
            formData["empl-type"]
              ? `<span class="badge">${formData["empl-type"]}</span>`
              : "Not provided"
          }</div>
        </div>
        ${
          formData["key-resp"]
            ? `
        <div class="highlight-box">
          <strong>Key Responsibilities:</strong><br>
          ${formData["key-resp"].replace(/\n/g, "<br>")}
        </div>
        `
            : ""
        }
        ${
          formData["skills-qualifications"]
            ? `
        <div class="highlight-box">
          <strong>Required Skills & Qualifications:</strong><br>
          ${formData["skills-qualifications"].replace(/\n/g, "<br>")}
        </div>
        `
            : ""
        }
        <div class="info-row">
          <div class="info-label">Preferred Experience:</div>
          <div class="info-value">${
            formData["pref-exp-lvl"] || "Not specified"
          }</div>
        </div>
      </div>

      <!-- Candidate Preferences -->
      <div class="section">
        <div class="section-title">🎯 Candidate Preferences</div>
        <div class="info-row">
          <div class="info-label">Desired Location(s):</div>
          <div class="info-value">${
            formData["desired-location"] || "Not specified"
          }</div>
        </div>
        ${
          formData["special-req"]
            ? `
        <div class="highlight-box">
          <strong>Special Requirements:</strong><br>
          ${formData["special-req"].replace(/\n/g, "<br>")}
        </div>
        `
            : ""
        }
      </div>
    </div>

    <div class="footer">
      <p><strong>StorkLink</strong> • Talent Acquisition Platform</p>
      <p>This inquiry was submitted on ${new Date().toLocaleString("en-US", {
        dateStyle: "full",
        timeStyle: "short",
      })}</p>
    </div>
  </div>
</body>
</html>
`;
    } else if (formData.formType === "Talent") {
      subject = `👤 New Talent Registration - ${formData.name || "Candidate"}`;
      htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
    .header { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 30px; text-align: center; }
    .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
    .content { padding: 30px; }
    .section { margin-bottom: 30px; }
    .section-title { color: #f5576c; font-size: 18px; font-weight: 600; margin-bottom: 15px; padding-bottom: 8px; border-bottom: 2px solid #f5576c; }
    .info-row { display: flex; margin-bottom: 12px; }
    .info-label { font-weight: 600; color: #555; min-width: 200px; }
    .info-value { color: #333; flex: 1; }
    .highlight-box { background: #f8f9fa; border-left: 4px solid #f5576c; padding: 15px; margin: 15px 0; }
    .footer { background: #f8f9fa; padding: 20px; text-align: center; color: #666; font-size: 12px; }
    .badge { display: inline-block; background: #f5576c; color: white; padding: 4px 12px; border-radius: 12px; font-size: 12px; margin-left: 8px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>👤 New Talent Registration</h1>
      <p style="margin: 5px 0 0 0; opacity: 0.9;">From StorkLink Talent Form</p>
    </div>
    
    <div class="content">
      <!-- Personal Information -->
      <div class="section">
        <div class="section-title">📋 Personal Information</div>
        <div class="info-row">
          <div class="info-label">Full Name:</div>
          <div class="info-value"><strong>${
            formData.name || "Not provided"
          }</strong></div>
        </div>
        <div class="info-row">
          <div class="info-label">Email:</div>
          <div class="info-value"><a href="mailto:${
            formData.email
          }" style="color: #f5576c;">${
        formData.email || "Not provided"
      }</a></div>
        </div>
        <div class="info-row">
          <div class="info-label">Phone:</div>
          <div class="info-value"><a href="tel:${
            formData.phone
          }" style="color: #f5576c;">${
        formData.phone || "Not provided"
      }</a></div>
        </div>
        <div class="info-row">
          <div class="info-label">Current Location:</div>
          <div class="info-value">${formData.location || "Not provided"}</div>
        </div>
        <div class="info-row">
          <div class="info-label">LinkedIn Profile:</div>
          <div class="info-value">${
            formData.linkedin
              ? `<a href="${formData.linkedin}" style="color: #f5576c;" target="_blank">${formData.linkedin}</a>`
              : "Not provided"
          }</div>
        </div>
      </div>

      <!-- Professional Information -->
      <div class="section">
        <div class="section-title">💼 Professional Background</div>
        <div class="info-row">
          <div class="info-label">Current Position:</div>
          <div class="info-value"><strong>${
            formData["current-position"] || "Not provided"
          }</strong></div>
        </div>
        <div class="info-row">
          <div class="info-label">Industry/Field:</div>
          <div class="info-value">${
            formData["industry-field"] || "Not provided"
          }</div>
        </div>
        <div class="info-row">
          <div class="info-label">Years of Experience:</div>
          <div class="info-value"><span class="badge">${
            formData["experience-years"] || "Not specified"
          }</span></div>
        </div>
        ${
          formData["skills-certifications"]
            ? `
        <div class="highlight-box">
          <strong>Skills & Certifications:</strong><br>
          ${formData["skills-certifications"].replace(/\n/g, "<br>")}
        </div>
        `
            : ""
        }
      </div>

      <!-- Job Preferences -->
      <div class="section">
        <div class="section-title">🎯 Job Preferences</div>
        <div class="info-row">
          <div class="info-label">Desired Role:</div>
          <div class="info-value"><strong>${
            formData["desired-role"] || "Not specified"
          }</strong></div>
        </div>
        <div class="info-row">
          <div class="info-label">Preferred Location(s):</div>
          <div class="info-value">${
            formData["pref-location"] || "Not specified"
          }</div>
        </div>
        <div class="info-row">
          <div class="info-label">Employment Type:</div>
          <div class="info-value">${
            formData["empl-type"]
              ? `<span class="badge">${formData["empl-type"]}</span>`
              : "Not specified"
          }</div>
        </div>
        <div class="info-row">
          <div class="info-label">Availability to Start:</div>
          <div class="info-value">${
            formData.availability || "Not specified"
          }</div>
        </div>
        <div class="info-row">
          <div class="info-label">Open to Relocation:</div>
          <div class="info-value">${
            formData.relocation
              ? `<span class="badge">${formData.relocation}</span>`
              : "Not specified"
          }</div>
        </div>
      </div>

      <!-- Language Proficiency -->
      <div class="section">
        <div class="section-title">🌍 Language Proficiency</div>
        <div class="info-row">
          <div class="info-label">German Proficiency:</div>
          <div class="info-value">${
            formData.proficiency
              ? `<span class="badge">${formData.proficiency}</span>`
              : "Not specified"
          }</div>
        </div>
        <div class="info-row">
          <div class="info-label">Other Languages:</div>
          <div class="info-value">${
            formData["lang-spoken"] || "Not specified"
          }</div>
        </div>
      </div>

      <!-- Additional Information -->
      ${
        formData["additional-info"]
          ? `
      <div class="section">
        <div class="section-title">💭 Why Germany?</div>
        <div class="highlight-box">
          ${formData["additional-info"].replace(/\n/g, "<br>")}
        </div>
      </div>
      `
          : ""
      }
    </div>

    <div class="footer">
      <p><strong>StorkLink</strong> • Talent Acquisition Platform</p>
      <p>This application was submitted on ${new Date().toLocaleString(
        "en-US",
        { dateStyle: "full", timeStyle: "short" }
      )}</p>
      ${
        formData.cvFile
          ? `<p style="color: #f5576c; font-weight: 600;">📎 CV Attached: ${formData.cvFile.name}</p>`
          : ""
      }
    </div>
  </div>
</body>
</html>
`;
    } else if (formData.formType === "Contact") {
      subject = `📧 New Contact Form Submission - ${formData.name || "Guest"}`;
      htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
    .header { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; padding: 30px; text-align: center; }
    .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
    .content { padding: 30px; }
    .section { margin-bottom: 30px; }
    .section-title { color: #4facfe; font-size: 18px; font-weight: 600; margin-bottom: 15px; padding-bottom: 8px; border-bottom: 2px solid #4facfe; }
    .info-row { display: flex; margin-bottom: 12px; }
    .info-label { font-weight: 600; color: #555; min-width: 150px; }
    .info-value { color: #333; flex: 1; }
    .message-box { background: #f8f9fa; border-left: 4px solid #4facfe; padding: 20px; margin: 20px 0; border-radius: 4px; }
    .footer { background: #f8f9fa; padding: 20px; text-align: center; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📧 New Contact Message</h1>
      <p style="margin: 5px 0 0 0; opacity: 0.9;">From StorkLink Contact Form</p>
    </div>
    
    <div class="content">
      <div class="section">
        <div class="section-title">📋 Contact Details</div>
        <div class="info-row">
          <div class="info-label">Name:</div>
          <div class="info-value"><strong>${
            formData.name || "Not provided"
          }</strong></div>
        </div>
        <div class="info-row">
          <div class="info-label">Email:</div>
          <div class="info-value"><a href="mailto:${
            formData.email
          }" style="color: #4facfe;">${
        formData.email || "Not provided"
      }</a></div>
        </div>
        <div class="info-row">
          <div class="info-label">Phone:</div>
          <div class="info-value"><a href="tel:${
            formData.phone
          }" style="color: #4facfe;">${
        formData.phone || "Not provided"
      }</a></div>
        </div>
        <div class="info-row">
          <div class="info-label">Subject:</div>
          <div class="info-value">${formData.subject || "No subject"}</div>
        </div>
      </div>

      ${
        formData.message
          ? `
      <div class="section">
        <div class="section-title">💬 Message</div>
        <div class="message-box">
          ${formData.message.replace(/\n/g, "<br>")}
        </div>
      </div>
      `
          : ""
      }
    </div>

    <div class="footer">
      <p><strong>StorkLink</strong> • Talent Acquisition Platform</p>
      <p>This message was submitted on ${new Date().toLocaleString("en-US", {
        dateStyle: "full",
        timeStyle: "short",
      })}</p>
    </div>
  </div>
</body>
</html>
`;
    }

    // Set mail options
    mailOptions.subject = subject;
    mailOptions.html = htmlContent;

    // Handle file attachment for Talent form
    if (formData.formType === "Talent" && formData.cvFile) {
      const base64Data = formData.cvFile.data.split(",")[1]; // Remove data:application/pdf;base64, prefix

      mailOptions.attachments = [
        {
          filename: formData.cvFile.name,
          content: base64Data,
          encoding: "base64",
        },
      ];
    }

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
