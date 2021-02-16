import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form action="">
        <input placeholder="Digite o nome do reposório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/32112630?s=460&u=933db4ca92aaf181148b90668a98c394da8d2fc6&v=4"
            alt="Kleiton Marques"
          />
          <div>
            <strong>kleitonMarques/githubExplorer</strong>
            <p>Application developed using React in the Front-End.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/32112630?s=460&u=933db4ca92aaf181148b90668a98c394da8d2fc6&v=4"
            alt="Kleiton Marques"
          />
          <div>
            <strong>kleitonMarques/githubExplorer</strong>
            <p>Application developed using React in the Front-End.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/32112630?s=460&u=933db4ca92aaf181148b90668a98c394da8d2fc6&v=4"
            alt="Kleiton Marques"
          />
          <div>
            <strong>kleitonMarques/githubExplorer</strong>
            <p>Application developed using React in the Front-End.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
