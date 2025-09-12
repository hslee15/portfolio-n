import React,{useState,useEffect} from 'react'
import '../admin/styles/AdminContact.scss'
import { api } from '../../lib/api'
import Swal from 'sweetalert2'

const AdminContact = () => {

    const [contacts, setContacts]=useState([])

    useEffect(()=>{

        const fetchData=async()=>{
            try {
                const res=await api.get('/api/contact')
                setContacts(res.data)

            } catch (error) {
                console.log('문의글 가져오기 실패',error)
            }
        }

        fetchData()


    },[])

    return (
        <div className='inner admin-contact'>
            <h2>문의글 관리</h2>
            <div className="contact-wrapper">
                <ul className='contact-list'>
                    {contacts.map((c,i)=>(
                    <li key={c._id}>
                    <h3>{c.name}:{c.email}</h3>
                    <p><strong>전화번호</strong>{c.phone}</p>
                    <p><strong>메세지</strong>{c.message}</p>
                    <p>
                        <strong>상태</strong> {c.status}
                    </p>
                    <div className="btns">
                        <button>상태변경</button>
                        <button>삭제</button>
                    </div>
                    </li>
                    ))}

                </ul>
            </div>
        </div>
    )
}

export default AdminContact