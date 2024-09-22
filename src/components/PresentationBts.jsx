import React from "react";

const PresentationBts = () => {
  return (
    <section className="bts-section">
      <h1>BTS SIO</h1>
      <p>
        Le BTS SIO (Service Informatique aux Organisations) est un programme de
        niveau Bac+2, qui forme des informaticiens aussi bien doués pour le
        développement que pour l'administration et la maintenance d'un réseau
        informatique.
      </p>

      <div className="parent">
        <div className="div1">
          <h2>SLAM</h2>
          <p>
            Le BTS SIO option SLAM (Solutions Logicielles et Applications
            Métiers) vous prépare à la mise en place de solutions informatiques
            au sein des entreprises, en vue de gérer efficacement un parc
            informatique complet.
          </p>
        </div>

        <div className="div2">
          <h2>SISR</h2>
          <p>
            Le BTS SIO SISR (Solution d'Infrastructure Système et Réseau), est
            une option du BTS SIO qui a pour but de former des techniciens
            réseau polyvalents. Les lauréats de ce programme ont toutes les
            compétences nécessaires pour la gestion et la maintenance du réseau
            d'une entreprise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PresentationBts;
