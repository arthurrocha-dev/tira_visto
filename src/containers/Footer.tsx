import { GoArrowUpRight } from "react-icons/go";
import { Button } from "../components/Button";

export const Footer = () => {
  return (
    <footer>
      <div className="px-[20px] md:px-[20px] lg:px-[60px] py-[70px]">
        <div className="flex items-center justify-between mb-[40px]">
          <div className="w-2/5">
            <h4 className="font-bold text-4xl mb-3">Está com alguma dúvida?</h4>
            <p className="mb-[40px]">
              Entre em contato através do nosso canal direto ao cliente através
              do botão abaixo
            </p>
            <Button type="secondary">Central de Atendimento</Button>
          </div>
          <div className="w-2/5">
            <a href="">
              <div className="flex items-center justify-between text-4xl">
                Receba novidades
                <GoArrowUpRight />
              </div>
            </a>
            <hr />
          </div>
        </div>

        <div className="flex items-end justify-between ">
          <div className="w-2/5">
            <div>
              <p className="font-bold mb-5">Siga em nossa redes:</p>

              <div className="flex gap-5">
                <a href="" className="border rounded-full px-[20px] py-[10px]">
                  Instagram
                </a>
                <a href="" className="border rounded-full px-[20px] py-[10px]">
                  Instagram
                </a>
                <a href="" className="border rounded-full px-[20px] py-[10px]">
                  Instagram
                </a>
                <a href="" className="border rounded-full px-[20px] py-[10px]">
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="flex w-2/5 justify-evenly">
            <div>
              <p className="font-bold mb-3">Empresa</p>
              <ul>
                <li className="mb-3">
                  <a href="#">Home</a>
                </li>
                <li className="mb-3">
                  <a href="#">Quem somos</a>
                </li>
                <li className="mb-3">
                  <a href="#">Serviços</a>
                </li>
                <li className="mb-3">
                  <a href="#">Contato</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-3">Novidades</p>
              <ul>
                <li className="mb-3">
                  <a href="">Passaporte</a>
                </li>
                <li className="mb-3">
                  <a href="">Visto</a>
                </li>
                <li className="mb-3">
                  <a href="">Entrevista</a>
                </li>
                <li className="mb-3">
                  <a href="">Polícia Federal</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-3">Suporte</p>
              <ul>
                <li className="mb-3">
                  <a href="" className="">
                    FAQ
                  </a>
                </li>
                <li className="mb-3">
                  <a href="" className="">
                    Contato
                  </a>
                </li>
                <li className="mb-3">
                  <a href="" className="">
                    Dúvidas Frequentes
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center border-t border-ligth-grey py-[31px]">
        <p>&copy; Todos os direitos reservados</p>
      </div>
    </footer>
  );
};
