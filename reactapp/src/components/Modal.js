import React from 'react';
import './visuels/Modal.css';
import './visuels/Bouton.css';


export default function Modal2 (props){
    
        return (
            <div className='Modal'
style={{
transform: props.visible ? 'translateY(0vh)' : 'translateY(-100vh)',
opacity: props.visible ? '1' : '0'

}}
>
<button onClick={props.cache} className="Boutonexit">X</button>
<div className='Divhaut'>
<img className='Divhautgauche'src='../images/pinguin.png'  height='150px' alt='' />
 
<div className='Divhautdroite'>
     <div>
     <h2  >super aide</h2>
     <h4>1000 à  2000 €</h4>
     </div>
     <div style={{
         display: 'flex',
         flexDirection: 'row',
         
         
     }}>
         <div>
         <h5 className='Details'>Type d'aide: </h5>
         <p className='Details'>Subvention</p>
         </div>
         <div>
         <h5 className='Details'>Difficulté: </h5>
         <p className='Details'>très faible</p>
         </div>
         <div>
         <h5 className='Details'>Délai d'obtention: </h5>
         <p className='Details'>1 mois</p>
         </div>
        
     </div>
 </div>

</div>

<div style={{
    display:'flex',
    flexDirection:'row',
    
}}>
    <div className='Colonnegauche'>
    <h5>Organisme financeur</h5>
    <p>Pôle Emplois</p>
    <h5>Stratégie</h5>
    <p>iRecrutement</p>
    <h5>Département</h5>
    <p>Bouches-du-Rhône</p>
    <h5>Lien de l’organisme</h5>
    <p>https://www.bpifrance.fr/nos-solutions/innovation</p>
    </div>
    <div>
    <h3>Bénéficiaires</h3>
    <div className='Hline'></div>
    <p className='Critere'>Publics visés par le dispositif :
TPE, PME(1) et ETI(2) qui recrutent :
en contrat de travail, un jeune de niveau bac+2 minimum, diplômé depuis moins de 2 ans et pour une
mission d’au moins 1 an
en contrat d’apprentissage ou de professionnalisation (pour une  durée de 10 mois minimum), un
jeune déjà diplômé de niveau bac+2 et en cours de formation pour un niveau bac+3 ou plus

(1) Selon la défnition européenne de la PME : entreprise de moins de 250 salariés déclarant soit un CA annuel
inférieur à 50 M€, soit un total de bilan n'excédant pas 43 M€. Elle doit être indépendante, c'est-à-dire ne pas
être détenue à plus de 25 % par une ou plusieurs entités qui ne sont pas des PME.
 
(2) Jusqu'à 5.000 salariés</p>
    <h3>Critères d’éligibilité</h3>
    <div className='Hline'></div>
    <p className='Critere'> Nombre de salariés</p>
    <p className='Critere'><img src='../images/checked.png' alt='' />Chiffre d’affaires</p>
    <p className='Critere'><img src='../images/checked.png'  alt=''/>Pas de licenciement économique dans les 6 derniers mois</p>
    <p className='Critere'><img src='../images/checked.png' alt='' />Entreprises implantées en France enregistrées au registre du Commerce et des Sociétés ou au Répertoire des Métiers</p>
    <p className='Critere'><img src='../images/cancel.png'  alt=''/>À jour des versements fiscaux et sociaux</p>
    <p className='Critere'><img src='../images/cancel.png' alt='' />Situation financière saine</p>
    <p className='Critere'><img src='../images/cancel.png' alt='' />Sous réserve d'un niveau de fonds propres sufisant</p>
    <h3>Modalités</h3>
    <div className='Hline'></div>
    <p className='Critere'>L'aide est octroyée sous forme de subvention variable selon la nature de l'investissement :
Pour les études préalables et les actions complémentaires : la subvention est plafonnée à 50 000 € par
bénéfciaire et par projet. Le taux maximum sera défni en fonction de la taille de l’entreprise et du régime
d’aides. 
Pour les investissements : le taux maximum sera défni en fonction de la taille de l’entreprise et du régime
d’aides. </p>
<div className='Barreboutons'>
                <button className='Bouton2'>TELECHARGER FICHE</button>
                <button className='Bouton2'>PARTAGER FICHE</button>
                <button className='Bouton2'>NOUS CONTACTER </button>
                </div>
    </div>
   
</div>

                
            </div>
        )
    }
