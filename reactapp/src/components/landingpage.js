import React, { useState, useEffect } from 'react';
import { Input, Typography, Space } from 'antd';
import { Button, Media } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function landingpage() {

    return (
        <div>
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <img src='../images/EDIA.png' style={{}} height='150px' />
                <div>
                    <Button outline color="primary" size='lg' style={{ margin: '20px' }}>Se connecter</Button>
                    <Button color="primary" size='lg' style={{ margin: '20px' }}>S'inscrire</Button>
                </div>
            </div>
        </div>

      <div>
      <Media>
        <Media left top href="#">
          <Media object data-src="../images/iconeintelligentes.png" alt="Icon with a target" />
        </Media>
        <Media body>
          <Media heading>
            INTELLIGENTES
          </Media>
          Nous vous posons quelques questions et notre algorithme s'occupe du reste pour trouver les aides qui correspondent au mieux aux besoins de votre entreprise.
        </Media>
      </Media>
      </div>
      <Media className="mt-1">
        <Media left middle href="#">
          <Media object data-src="../images/iconeexhaustives.png" alt="Icon with a robot" />
        </Media>
        <Media body>
          <Media heading>
            EXHAUSTIVES
          </Media>
          Notre algorithme se charge de parcourir l'ensemble des dispositifs d'aides en France et en Europe. Vous êtes assuré(e) de ne manquer aucune aide publique pour développer votre entreprise.
        </Media>
      </Media>
      <div>
      <Media className="mt-1">
        <Media left bottom href="#">
          <Media object data-src="../images/iconeexhaustives.png" alt="Icon with a paperplane" />
        </Media>
        <Media body>
          <Media heading>
            AUTOMATISEES
          </Media>
          Plus besoin de vérifier de manière régulière les nouveaux dispositifs d'aides. Une notification vous est envoyée quand une aide correspond à vos critères.
        </Media>
      </Media>
      </div>
      </div>

    )
}
export default landingpage;