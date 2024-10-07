'use client'
import { useState } from 'react'
import { ClipLoader } from 'react-spinners'

const ProofOfPayment = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      setError('')
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!selectedFile) {
      setError('Please select an image file.')
      return
    }

    setLoading(true)
    setError('')

    // Simulating an API call or file submission
    setTimeout(() => {
      setLoading(false)
      alert('File successfully submitted!')
      setSelectedFile(null) // Clear the file input after submission
    }, 2000) // Simulates a 2-second submission delay
  }
  return (
    <div className="mt-40 flex justify-center mx-auto">
      <div className="bg-gray-200 w-[95%] sm:w-[95%] lg:w-[60%] flex flex-col md:px-10 px-5 rounded-md pb-10 ">
        <h1 className="text-[#01aef0] uppercase text-4xl font-bold mt-16 text-center">
          Your Proof Of Payment
        </h1>
        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="proofOfPayment" className="font-semibold">
              Upload Image
            </label>
            <input
              type="file"
              id="proofOfPayment"
              accept="image/*"
              onChange={handleFileChange}
              className="p-2 border rounded-md"
            />
            {error && (
              <p className="text-red-500 text-md font-semibold">{error}</p>
            )}
          </div>
          <button
            type="submit"
            className="mt-4 bg-[#01aef0] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center text-lg">
                <ClipLoader color="#ffffff" size={15} />
                <span className="ml-2 font-semibold">Submitting...</span>
              </div>
            ) : (
              <div className='text-lg font-semibold'>Submit Proof</div>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ProofOfPayment
