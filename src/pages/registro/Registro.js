import React, {useState} from 'react'
import style from './Registro.module.css'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {useForm} from 'react-hook-form'
import Cookies from 'js-cookie';
import {Link} from 'react-router-dom'

function Registro() {

    const [modal, setModal] = useState(false)

    const schema = yup.object({
        name: yup.string().required('O nome é obrigatório'),
        dataNascimento: yup.number().positive().required().typeError('A idade é obrigatória'),
        cpf: yup.number().positive().required().typeError('O cpf é obrigatório'),
        cep: yup.number().required().typeError('O CEP é obrigatório')
      }).required();

      const { register, setFocus, setValue, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });

    const [nome, setNome] = useState()
    const [cpf, setCpf] = useState()
    const [dataNascimento, setDataNascimento] = useState()

    const onChangeNome = event => {
        localStorage.setItem('nome', event.target.value);
        Cookies.set('nomeCk', event.target.value);
        setNome(event.target.value);
      };

      const onChangeDataNascimento = event => {
        localStorage.setItem('dataNascimento', event.target.value);
        Cookies.set('dataNascimentoCk', event.target.value);
        setDataNascimento(event.target.value);
      };

      const onChangeCpf = event => {
        localStorage.setItem('cpf', event.target.value);
        Cookies.set('cpfCk', event.target.value);
        setCpf(event.target.value);
      };

    const checarCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        console.log(cep)
        localStorage.setItem('cep', cep);
        Cookies.set('cepCk', cep)
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
        console.log(data);
        setValue('address', data.logradouro);
        localStorage.setItem('logradouro', data.logradouro);
        Cookies.set('logradouroCk', data.logradouro);
        setValue('neighborhood', data.bairro);
        localStorage.setItem('bairro', data.bairro);
        Cookies.set('bairroCk', data.bairro);
        setValue('city', data.localidade);
        localStorage.setItem('cidade', data.localidade);
        Cookies.set('cityCk', data.localidade);
        setValue('uf', data.uf);
        localStorage.setItem('uf', data.uf);
        Cookies.set('ufCk', data.uf)
        setFocus('addressNumber');
    });
    }

    return (
        <div className={style.container}>
            <form className={style.form} onSubmit={handleSubmit()}>
            <h1>Healthy Food</h1>
            <label>
                <input {...register("name")} placeholder='Insira o seu nome' value={nome} onChange={onChangeNome} />
                <p>{errors.firstName?.message}</p>
            </label>

            <label>
                <input {...register("dataNascimento")} placeholder='Insira sua data de Nascimento' value={dataNascimento} onChange={onChangeDataNascimento}/>
                <p>{errors.age?.message}</p>
            </label>
            
            <label>
                <input {...register("cpf")} placeholder='Insira seu CPF' value={cpf} onChange={onChangeCpf}/>
                <p>{errors.cpf?.message}</p>
            </label>

            <label>
                <input type="text" {...register("cep")} onBlur={checarCEP} placeholder='Digite seu CEP'/>
                <p>{errors.cep?.message}</p>
            </label>

          <div className={style.linhaUm}>
          <label>
                <input type="text" {...register("address" )} placeholder='Rua'/>
            </label>

            <label>
                <input type="text" {...register("neighborhood" )} placeholder='Bairro'/>
            </label>
          </div>

           <div className={style.linhaDois}>
           <label>
                <input type="text" {...register("city" )} placeholder='Cidade'/>
            </label>

            <label>
                <input type="text" {...register("uf" )} placeholder='Estado' />
            </label>
           </div>

               <div className={style.buttons}>
               <button type="submit" onClick={() => setModal(true)}>Cadastrar</button>
                <Link to="/"><button>Voltar</button></Link>
               </div>  
            </form>
            {modal ? (
                <div className={style.modal}>
                    <h1>Boas vindas ao Healthy Food {localStorage.getItem('nome')}</h1>
                    <Link to="/"><button className={style.buttonConcluir}>Concluir</button></Link>
                </div>
            ): null}
           
        </div>
    )
}

export default Registro
