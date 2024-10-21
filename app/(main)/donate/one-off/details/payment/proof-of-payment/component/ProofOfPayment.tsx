'use client'
import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage'
import { app } from '@/app/firebase'
import { BASE_URL } from '@/app/(admin)/admin/utils/apiConfig'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const ProofOfPayment = () => {
  const router = useRouter()
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [filePerc, setFilePerc] = useState(0)
  const [fileError, setFileError] = useState(false)
  const [formData, setFormData] = useState({})
  console.log(formData)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      setError('')
    }
  }

  useEffect(() => {
    if (selectedFile) {
      handleFileUpload(selectedFile)
    }
  }, [selectedFile])

  const handleFileUpload = (file: any) => {
    const storage = getStorage(app)
    const fileName = new Date().getTime() + file.name
    const storageRef = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setFilePerc(Math.round(progress))
      },
      (error: any) => {
        setFileError(true)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downLoadUrl) => {
          setFormData({ ...formData, imageLink: downLoadUrl })
        })
      }
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!selectedFile) {
      setError('Please select an image file.')
      return
    }

    setLoading(true)
    setError('')

    // Simulating an API call or file submission
    try {
      const response = await axios.post(
        `${BASE_URL}/api/storePaymentDetails`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      if (response.status === 200) {
        console.log(formData)
        setFormData({
          imageLink: '',
        })
        setTimeout(() => {
          setLoading(false)
          setSelectedFile(null) 
        }, 2000)
        router.push('/donate/thank-you')
      } else {
        console.error('Error posting image')
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="mt-40 flex justify-center mx-auto">
      <div className="bg-gray-200 w-[95%] sm:w-[95%] lg:w-[60%] flex flex-col md:px-10 px-5 rounded-md pb-10">
        <h1 className="text-red-600 uppercase text-2xl font-bold mt-16 text-center">
          Kindly provide us with proof of payment
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
            {fileError ? (
              <span className="text-red-500 text-md font-semibold">
                Error Image upload
              </span>
            ) : filePerc > 0 && filePerc < 100 ? (
              <span>{`Uploading ${filePerc}%`}</span>
            ) : filePerc === 100 ? (
              <span className="text-green-500 text-md">
                Image uploaded, click to submit
              </span>
            ) : (
              ''
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
              <div className="text-lg font-semibold">Submit</div>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ProofOfPayment
