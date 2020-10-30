import React, { ReactElement } from 'react';
import { Tidslinje } from '@namespace/components';

const forventninger = [
  'Dersom søknaden din blir godkjent vil du bli bedt om å sende meldekort, og du vil få første utbetaling 2-3 virkedager etter fristen for innsending av meldekort',
  'Vi vil gi deg svar på søknaden din innen 6 uker etter at du har lastet opp all nødvendig dokumentasjon',
];

const notifikasjoner = [
  {
    produsent: 'grafana-navn-srv-bruker',
    eventId: '1b6dc4d2-2347-48e4-a05b-0a342555351a',
    eventTidspunkt: '2020-10-14T11:00:39.065Z',
    grupperingsId: '1234',
    link: 'dummyLink',
    sikkerhetsnivaa: 4,
    sistOppdatert: '2020-10-14T11:00:39.186199Z',
    statusGlobal: 'FERDIG',
    statusIntern: 'dummyStatusIntern',
    sakstema: 'dummySakstema',
    type: 'Statusoppdatering',
  },
  {
    produsent: 'grafana-navn-srv-bruker',
    eventId: '1b6dc4d2-2347-48e4-a05b-0a342555351a',
    eventTidspunkt: '2020-10-14T11:00:39.065Z',
    grupperingsId: '1234',
    link: 'dummyLink',
    sikkerhetsnivaa: 4,
    sistOppdatert: '2020-10-14T11:00:39.186199Z',
    statusGlobal: 'UNDER_BEHANDLING',
    statusIntern: 'dummyStatusIntern',
    sakstema: 'dummySakstema',
    type: 'Statusoppdatering',
  },
  {
    eventTidspunkt: '2020-10-14T11:00:16.983Z',
    eventId: 'e7a81e3b-2c37-4cad-862f-673839856685',
    tekst: 'Det mangler et vedlegg i søknaden',
    link: 'test 1 oppgave',
    produsent: 'grafana-navn-srv-bruker',
    sistOppdatert: '2020-10-14T11:00:17.111426Z',
    sikkerhetsnivaa: 4,
    type: 'Oppgave',
  },
  {
    produsent: 'grafana-navn-srv-bruker',
    eventId: '1b6dc4d2-2347-48e4-a05b-0a342555351a',
    eventTidspunkt: '2020-10-14T11:00:39.065Z',
    grupperingsId: '1234',
    link: 'dummyLink',
    sikkerhetsnivaa: 4,
    sistOppdatert: '2020-10-14T11:00:39.186199Z',
    statusGlobal: 'MOTTATT',
    statusIntern: 'dummyStatusIntern',
    sakstema: 'dummySakstema',
    type: 'Statusoppdatering',
  },
  {
    uid: '5e632788-51c9-4963-81dd-ac9674eecce8',
    eventTidspunkt: '2020-10-14T11:00:04.179Z',
    eventId: '52787b1a-e00c-42ed-81b2-a9d57fd75f22',
    tekst: 'Vi har motatt søknaden din om arbeidsavklaringspenger',
    link: 'test 1 beskjed',
    produsent: 'grafana-navn-srv-bruker',
    sistOppdatert: '2020-10-14T11:00:05.445749Z',
    sikkerhetsnivaa: 4,
    type: 'Beskjed',
  },
  {
    produsent: 'grafana-navn-srv-bruker',
    eventId: '1b6dc4d2-2347-48e4-a05b-0a342555351a',
    eventTidspunkt: '2020-10-14T11:00:39.065Z',
    grupperingsId: '1234',
    link: 'dummyLink',
    sikkerhetsnivaa: 4,
    sistOppdatert: '2020-10-14T11:00:39.186199Z',
    statusGlobal: 'SENDT',
    statusIntern: 'dummyStatusIntern',
    sakstema: 'dummySakstema',
    type: 'Statusoppdatering',
  },
];

const App = (): ReactElement => (
  <div className="app">
    <Tidslinje notifikasjoner={notifikasjoner} forventninger={forventninger} />
  </div>
);

export default App;
