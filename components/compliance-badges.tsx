export function ComplianceBadges() {
  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-8 opacity-60">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
              <span className="text-xs font-bold text-gray-600">AICPA SOC 2</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
              <span className="text-xs font-bold text-gray-600">GDPR</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
              <span className="text-xs font-bold text-gray-600">ISO 12001</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
              <span className="text-xs font-bold text-gray-600">ISO 27001</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
              <span className="text-xs font-bold text-gray-600">ISO 27701</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
