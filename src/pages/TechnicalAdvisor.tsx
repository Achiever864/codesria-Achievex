// import { Mail, Linkedin } from "lucide-react";
import joan from "../assets/joan.jpg";

function TechnicalAdvisor() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-16 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-emerald-700 mb-2">
            Meet Our Technical Advisor
          </h2>
          <div className="w-16 h-1 bg-emerald-600"></div>
        </div>

        {/* Main Content - Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Image */}
          <div className="lg:col-span-1">
            <div className="bg-emerald-600 p-4 rounded-lg">
              <img
                src={joan}
                alt="Joanna Adewunmi"
                className="w-full h-auto object-cover rounded"
              />
            </div>
            {/* Name and Title Below Image */}
            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Joanna Adewunmi
              </h3>
              <p className="text-sm text-gray-600 font-medium mb-4 font-inter italic">
                Technical Advisor on Gender Equity and Social Inclusion (GESI)
              </p>

              {/* Contact Links */}
              {/* <div className="flex space-x-4">
                <a
                  href="mailto:joanna@example.com"
                  className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors text-sm"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email</span>
                </a>
                <a
                  href="https://linkedin.com/in/joanna-adewunmi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors text-sm"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </div> */}
            </div>
          </div>

          {/* Right Column - Bio Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-lg leading-relaxed">
                We are pleased to introduce <strong>Joanna Adewunmi</strong>,
                our Technical Advisor on Gender Equity and Social Inclusion
                (GESI) for the Gender + Politics of Renewable Energy in the Lake
                Chad Region project. Joanna brings certified expertise in gender
                relations and international development, along with a research
                portfolio centered on gender and racial equity, digital equity,
                and marginalized populations.
              </p>

              <p className="text-lg leading-relaxed">
                In her advisory role, Joanna provides strategic guidance to
                ensure that gender equity and social inclusion are embedded
                across the project's research design, analysis, and outcomes.
                She offers insights on gender-responsive methodologies, supports
                the identification of equity gaps, and strengthens the project's
                commitment to amplifying the experiences of women and other
                underserved communities in the region.
              </p>

              <p className="text-lg leading-relaxed">
                Joanna's contributions help position the project to better
                understand how power, identity, and resource access shape
                renewable energy transitions—ensuring that the work is not only
                academically rigorous but socially transformative.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 mt-8">
                <p className="text-lg font-semibold text-emerald-900 italic">
                  "We are honored to have her expertise shaping the project's
                  direction and impact."
                </p>
              </div>

              {/* Expertise Areas */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Areas of Expertise
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Gender Relations & International Development",
                    "Gender and Racial Equity",
                    "Digital Equity",
                    "Marginalized Populations",
                    "Gender-Responsive Methodologies",
                    "Social Inclusion Research",
                  ].map((area, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnicalAdvisor;
