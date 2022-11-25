import { useNavigate } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { MdEmail, MdLock } from "react-icons/md";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { api } from '../../services/api';
import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from "./styles"
import { IFormData } from "./types";
import React from "react";

const schema = yup.object({
    email: yup.string().email('email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'Mínimo 3 caracteres.').required('Campo obrigatório'),
  }).required();

const Login = () => {

    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });
    const navigate = useNavigate();
    const onSubmit = async (forData: IFormData) => {
        try{
            const { data } = await api.get(`users?email=${forData.email}&senha=${forData.password}`);
            if(data.length === 1){
                navigate('/feed');
            }else{
                alert('Email ou senha inválido!');
            }
            console.log(data);
        }catch{
            alert('Houve um erro, tente novamente.');
        }

    } 
    
    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro!</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail/>}/>
                        <Input name="password" control={control} errorMessage={errors?.password?.message} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                        <Button title="Entrar" variant="secondary"  type="submit"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha.</EsqueciText>
                        <CriarText>Criar conta.</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
        </>
    )
}

export { Login }