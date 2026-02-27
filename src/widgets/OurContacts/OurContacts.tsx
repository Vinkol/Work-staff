import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import styles from "./OurContacts.module.sass";
import mappin from "@/shared/assets/icons/map-pin.png";
import list from "@/shared/assets/icons/list.png";

const CENTER: [number, number] = [55.75687, 37.615051];

export const OurContacts = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <h3 className={styles.title}>Наши контакты</h3>

        <div className={styles.ourcontact_str}>
          <img src={mappin} alt="svg" />
          <div className={styles.name}>
            <strong>наш офис в Москве и Московской области</strong>
            <p>
              125040, г. Москва, ул. Скаковая, д.32, строение 2, помещ. 3/1, ком.27
            </p>
          </div>
        </div>

        <div className={styles.ourcontact_cif}>
          <img src={list} alt="svg" />
          <div className={styles.ourcontact_req}>
            <strong>Реквизиты</strong>
            <div className={styles.contact_sites}>
              <div className={styles.contact_box}>
                <div className={styles.contact_kod}>
                  <span>ИНН: </span>
                  <p>5405994159</p>
                </div>
                <div className={styles.contact_kod}>
                  <span>КПП: </span>
                  <p>771445001</p>
                </div>
                <div className={styles.contact_kod}>
                  <span>ОГРН: </span>
                  <p>1175476009114</p>
                </div>
                <div className={styles.contact_kod}>
                  <span>Юр. адрес: </span>
                  <p>630091, г. Новосибирск, ул.Фрунзе 5, офис 604</p>
                </div>
              </div>

              <div className={styles.contact_box}>
                <div className={styles.contact_kod}>
                  <span>БИК: </span>
                  <p>044525593</p>
                </div>
                <div className={styles.contact_kod}>
                  <span>К/с: </span>
                  <p>30101810200000000593</p>
                </div>
                <div className={styles.contact_kod}>
                  <span>Банк Филиал: </span>
                  <p>АО "АЛЬФА-БАНК"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.map}>
        <YMaps
          query={{
            lang: "ru_RU",
            apikey: "4afd69dd-3497-4c11-b10e-61a0b85d1a20",
          }}
        >
          <Map
            defaultState={{
              center: CENTER,
              zoom: 16,
            }}
            width="80%"
            height="70%"
            options={{
              suppressMapOpenBlock: true,
            }}
            modules={["geoObject.addon.balloon"]}
          >
            <Placemark
              geometry={CENTER}
              properties={{
                balloonContent: "г. Москва, ул. Скаковая, д.32",
              }}
            />
          </Map>
        </YMaps>
      </div>
    </div>
  );
};