"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Zap } from "lucide-react"
import { useState } from "react"

export function BookDemoForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    organizationType: "",
    surveyNeeds: ""
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <section className="relative min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-12 animate-fade-in-up">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                See how Tranzmit can help you understand your customers
              </h1>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  Talk to real customers, instantly
                </h2>
                <p className="text-muted-foreground text-lg">
                  AI-led 1-on-1 video interviews capture the why behind every decision.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  Insights in &lt;24 hours
                </h2>
                <p className="text-muted-foreground text-lg">
                  Auto-generated highlight reels and slide decks land before your next stand-up.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  Enterprise-grade & global
                </h2>
                <p className="text-muted-foreground text-lg">
                  Fraud-screened recruits, 50+ languages, SOC 2 Type II security.
                </p>
              </div>
            </div>

            <div>
              <p className="text-muted-foreground mb-8">
                <span className="font-semibold text-foreground">You're in safe hands</span> – we're trusted by industry leaders & innovators.
              </p>
              <div className="flex flex-wrap items-center gap-8 opacity-60">
                <div className="text-muted-foreground font-semibold text-lg">Microsoft</div>
                <div className="text-muted-foreground font-semibold text-lg">chubbies</div>
                <div className="text-muted-foreground font-semibold text-lg">poltra</div>
                <div className="text-muted-foreground font-semibold text-lg">OpusClip</div>
                <div className="text-muted-foreground font-semibold text-lg">Google</div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="animate-fade-in-up animation-delay-200">
            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-8">
                {/* Form header */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold text-primary">
                      Schedule Your AI Demo
                    </h2>
                  </div>
                  <p className="text-muted-foreground">
                    Experience the future of surveying with a personalized demonstration
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-sm font-semibold">
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        className="h-12 text-base transition-all duration-300 focus:scale-[1.02]"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="h-12 text-base transition-all duration-300 focus:scale-[1.02]"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone and Organization row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-semibold">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="h-12 text-base transition-all duration-300 focus:scale-[1.02]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization" className="text-sm font-semibold">
                        Organization
                      </Label>
                      <Input
                        id="organization"
                        placeholder="Your company/organization"
                        value={formData.organization}
                        onChange={(e) => handleInputChange("organization", e.target.value)}
                        className="h-12 text-base transition-all duration-300 focus:scale-[1.02]"
                      />
                    </div>
                  </div>

                  {/* Organization Type */}
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">Organization Type</Label>
                    <Select onValueChange={(value) => handleInputChange("organizationType", value)}>
                      <SelectTrigger className="h-12 text-base">
                        <SelectValue placeholder="Select your organization type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="enterprise">Enterprise (1000+ employees)</SelectItem>
                        <SelectItem value="midmarket">Mid-market (100-999 employees)</SelectItem>
                        <SelectItem value="small">Small Business (10-99 employees)</SelectItem>
                        <SelectItem value="startup">Startup (1-9 employees)</SelectItem>
                        <SelectItem value="agency">Agency/Consultancy</SelectItem>
                        <SelectItem value="nonprofit">Non-profit</SelectItem>
                        <SelectItem value="government">Government</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Survey Needs */}
                  <div className="space-y-2">
                    <Label htmlFor="surveyNeeds" className="text-sm font-semibold">
                      Tell us about your survey needs
                    </Label>
                    <Textarea
                      id="surveyNeeds"
                      placeholder="Describe your current surveying challenges and what you'd like to see in the demo..."
                      value={formData.surveyNeeds}
                      onChange={(e) => handleInputChange("surveyNeeds", e.target.value)}
                      className="min-h-[120px] text-base transition-all duration-300 focus:scale-[1.01] resize-none"
                    />
                  </div>

                  {/* Demo expectations */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 my-8">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-lg text-foreground mb-3">
                          What to expect in your demo:
                        </h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                            30-minute personalized walkthrough
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                            Live voice cloning showcase
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                            Custom use case discussion
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                            Q&A with AI specialists
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Submit button */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                  >
                    <Zap className="h-5 w-5 mr-2" />
                    Schedule My AI Demo
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
