import React, { useState } from 'react'
import { XCircle } from 'lucide-react'
// import { toast } from 'react-toastify'
// import { useAppDispatch } from '../../hooks'
// import { setModals } from 'slices/modalSlice'

const Delete = (props) => {
  // const router = useRouter()
  // const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false)

  const toggleOpen = () => {
    // dispatch(setModals(''))
    props.toggle('')
  }

  // const refreshCategories = async () => {
  //   await router.push(router.asPath)
  // }

  // const DeleteItem = (id: number) => {
  //   setLoading((prev) => !prev)
  //   if (
  //     props.for === 'Employee' ||
  //     props.for === 'Client' ||
  //     props.for === 'Invoice' ||
  //     props.for === 'Payment' ||
  //     props.for === 'Expense' ||
  //     props.for === 'Receiver'
  //   ) {
  //     dFetch(
  //       `/api/${
  //         router.query.view === 'receivers' ? 'clients' : router.query.view
  //       }/${id}/delete`
  //     ).then((res) => {
  //       if (res?.status === 201) {
  //         toggleOpen()
  //         refreshCategories()
  //         toast.success(res.data.message)
  //       } else {
  //         toast.error(res.response.data.message)
  //       }
  //       setLoading((prev) => !prev)
  //     })
  //   } else {
  //     dFetch(`/api/departments/${id}/delete`).then((res) => {
  //       if (res?.status === 201) {
  //         toggleOpen()
  //         props.refresh && props.refresh()
  //         toast.success(res.data.message)
  //       } else {
  //         toast.error(res.response.data.message)
  //       }
  //       setLoading((prev) => !prev)
  //     })
  //   }
  // }

  return (
    <div className='delete-wrapper'>
      <div className='overlay' onClick={toggleOpen}></div>
      <div className='delete-container'>
        <div className='delete-body'>
          <h2>Are you sure you want to delete this Expense?</h2>
          <div className='delete-buttons'>
            <button className='btn btn-danger'>Delete</button>
            <button className='btn btn-primary' onClick={toggleOpen}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Delete
