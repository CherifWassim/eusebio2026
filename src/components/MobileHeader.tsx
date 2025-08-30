import React from 'react'
import { Wifi, Battery, Signal } from 'lucide-react'

const MobileHeader: React.FC = () => {
  return (
    <div className="bg-slate-700 px-4 py-2 flex items-center justify-between text-white text-sm">
      <div className="flex items-center space-x-1">
        <span className="font-medium">15:59</span>
      </div>
      
      <div className="flex items-center space-x-1">
        <Signal size={14} className="text-white" />
        <span className="text-xs">5G</span>
        <div className="flex items-center">
          <Battery size={16} className="text-green-400" />
          <span className="text-green-400 text-xs ml-1">80%</span>
        </div>
      </div>
    </div>
  )
}

export default MobileHeader