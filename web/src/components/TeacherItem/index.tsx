import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://pbs.twimg.com/profile_images/378800000238398196/c2b453f2c6131f58a0e3cd4b23a58cc6_400x400.jpeg" alt="jonatan" />
                <div>
                    <strong>Diego Fernandes</strong>
                    <span>Quimica</span>
                </div>
            </header>
           
            <p>
            Lorem ipsum sagittis libero sapien aliquam eros ipsum malesuada ultricies tempor eros, scelerisque tortor nulla venenatis at euismod scelerisque diam a duis, lobortis arcu aptent vulputate lacus fusce dui pharetra tellus scelerisque. ante massa scelerisque sagittis nec venenatis lacus, lobortis aenean viverra aliquam turpis, sapien cras neque eleifend eget sagittis, nam aliquet ultricies phasellus. potenti egestas aenean pulvinar ad himenaeos ad, semper lectus etiam rutrum pellentesque, curae aliquet amet nibh himenaeos. pulvinar aliquet maecenas dictum venenatis amet quam inceptos convallis, inceptos accumsan dictumst tincidunt sapien pellentesque rutrum nunc augue, proin sollicitudin suscipit malesuada hac potenti cursus.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em Contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;