import React,{useEffect} from 'react'
import {useSelector} from 'react-redux';
import {selectAll} from '../store/App.selectors';
import {useNavigate} from 'react-router-dom'

export default function Home() {
    const {logado} = useSelector(selectAll);
    const navigate = useNavigate();

    useEffect(()=>{
        if(!logado) navigate('/login');
    },[logado])
    return logado && (
        <div>
            Home
        </div>
    )
}