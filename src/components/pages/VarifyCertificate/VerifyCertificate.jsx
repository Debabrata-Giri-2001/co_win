import React from 'react'
import verify_certificate from '../../assets/images/verify_certificate.png'

export default function VerifyCertificate() {
  return (
    <div className='p-4 bg-slate-100 dark:bg-[#0B162C] text-cyan-900 dark:text-slate-50'>
      <img className='w-[70%] md:w-[30%] ml-auto mr-auto' src={verify_certificate} alt="verify_certificate" />
      <div>
        <p>The Co-WIN vaccination certificate has a digitally signed secure QR code. This can be authenticated online using the verification utility in this portal or using third party verification app using the services outlined below.</p>
        <h2>Option 1 – Online verification</h2>
        <div>
          <li>Visit: <span className='text-blue-600'>https://verify.cowin.gov.in/</span></li>
          <li>Click on <span className='font-bold'>“Scan QR”</span>  code</li>
          <li>A notification will prompt to activate your device’s camera</li>
          <li>Point the camera to the QR code on the bottom right of the certificate issued and scan</li>
          <li>Please keep the following points in mind while scanning the QR code</li>
          <ul className='p-4'>
            <li>-Please keep the following points in mind while scanning the QR code</li>
            <li>-Complete QR code should be part of camera frame</li>
            <li>-QR code should be parallel to the camera</li>
            <li>-QR code should be parallel to the camera</li>
          </ul>
          <li>If camera is unable to read the QR code within 45 seconds, a message - <span className='font-bold'>“Camera is not able to read the QR code, please try again”</span>  with a try again button will be displayed. Verifier will be required to scan the QR code again following the instructions mentioned in Step 2.</li>
        </div>
      </div>
    </div>
  )
}
