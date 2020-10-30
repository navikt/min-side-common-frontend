import React, { ReactElement } from 'react';
import Panel from 'nav-frontend-paneler';
import { Normaltekst } from 'nav-frontend-typografi';
import Advarsel from './Advarsel';
import Informasjon from './Informasjon';
import Ferdig from './Ferdig';

interface Props {
  notifikasjon: any;
}

export interface TidslinjeProps {
  notifikasjoner: any;
  forventninger?: string[];
}

export interface SekvensProps {
  tekst: string;
}

const tidslinjeIkon = (type: string) => {
  switch (type) {
    case 'Beskjed':
      return <Informasjon />;
    case 'Oppgave':
      return <Advarsel />;
    case 'Statusoppdatering':
      return <Ferdig />;
    default:
      return null;
  }
};

const tidslinjeText = (notifikasjon: any) => {
  switch (notifikasjon.statusGlobal) {
    case 'SENDT':
      return 'Status i saken din: Sendt';
    case 'MOTTATT':
      return 'Status i saken din: Mottatt';
    case 'UNDER_BEHANDLING':
      return 'Ny status i saken din: Under behandling';
    case 'FERDIG':
      return 'Saken din er ferdig behandlet: Godkjent';
    default:
      return notifikasjon.tekst;
  }
};

const SekvensMedIkon = ({ notifikasjon }: Props): ReactElement => (
  <div className="sekvens-med-ikon">
    <div className="sekvens-med-ikon__ikon">
      {tidslinjeIkon(notifikasjon.type)}
    </div>
    <div className="sekvens-med-ikon__tekst">
      <Normaltekst>
        {tidslinjeText(notifikasjon)}
      </Normaltekst>
    </div>
  </div>
);

const Sekvens = ({ tekst }: SekvensProps) => (
  <div className="sekvens-uten-ikon">
    <div className="sekvens-uten-ikon__tekst">
      <Normaltekst>
        {tekst}
      </Normaltekst>
    </div>
  </div>
);

const Tidslinje = ({ notifikasjoner, forventninger }: TidslinjeProps): ReactElement => (
  <Panel border>
    <div className="tidslinje-container">
      {forventninger?.map((tekst) => (
        <Sekvens key={tekst} tekst={tekst} />
      ))}
      {notifikasjoner.map((notifikasjon: any) => (
        <SekvensMedIkon notifikasjon={notifikasjon} />
      ))}
    </div>
  </Panel>
);

export default Tidslinje;
