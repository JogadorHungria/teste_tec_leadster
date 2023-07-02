"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../../imagens/logo.png";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { StyledFooter } from "./StyledFooter";

export const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <Image src={logo} alt="Logo" />
        <span>Transformando visitantes em clientes</span>
      </div>
      <div className="container_links_header">
        <div>
          <h3>Links Princípais</h3>
          <Link href={""}>Home</Link>
          <Link href={""}>Ferramentas</Link>
          <Link href={""}>Preços</Link>
          <Link href={""}>Contato</Link>
        </div>
        <div>
          <h3>Cases</h3>
          <Link href={""}>Geração de Leads B2B</Link>
          <Link href={""}>Geração de Leads em Software</Link>
          <Link href={""}>Geração de Leads em Imobiliária</Link>
          <Link href={""}>Cases de Sucesso</Link>
        </div>
        <div>
          <h3>Materiais</h3>
          <Link href={""}>Blog</Link>
          <Link href={""}>Parceria com Agências</Link>
          <Link href={""}>Guia Definitivo do Marketing</Link>
          <Link href={""}>Materiais Gratuitos</Link>
        </div>
        <div>
          <h3>Siga a Leadster</h3>

          <div className="redes">
            <Link href={""}>
              {<FaLinkedinIn size={13} color="rgb(130, 127, 136)" />}
            </Link>

            <Link href={""}>
              {<FaInstagram size={13} color="rgb(130, 127, 136)" />}
            </Link>

            <Link href={""}>
              {<FaFacebookF size={13} color="rgb(130, 127, 136)" />}
            </Link>
          </div>
          <span>
            Email: <span>contato@leadster.com.br</span>
          </span>
          <span>
            Telefone: <span> (42) 98828-9851</span>
          </span>
        </div>
      </div>
      <div className="finalit_footer">
        <div>
          <span>
            Copyrigth c 2015 - 2022 Todos os direitos reservados Leadster
          </span>
          <span>
            Rua José Loureiro, 464 - Centro Curitiba PR - CEP: 80010-000 |
            Termos de uso
          </span>
        </div>
      </div>
    </StyledFooter>
  );
};
