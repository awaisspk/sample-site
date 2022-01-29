import { Button } from "@components/Button";
import styles from "./banner1.module.css";

export const Banner1 = () => {
  return (
    <section className={styles.bannerContainer}>
      <div className={styles.banner1}>
        <div className={styles.left}>
          <h1 className={styles.title}>Join world&apos;s best marketplace</h1>
          <p className={styles.description}>
            Find the best talent and best works based on your skills from around
            the world
          </p>
          <div className={styles.bannerBtn}>
            <Button type="tertiary">Find talent</Button>
            <Button type="bordered">Find work</Button>
          </div>
        </div>
        <div className={styles.illustration}>
          <Illustration />
        </div>
      </div>
    </section>
  );
};

export const Illustration = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        width="251"
        height="258"
        viewBox="0 0 751.15479 558.14695"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M865.65741,724.88374c7.97-18.67,13.59-38.99,10.93-59.1a65.244,65.244,0,0,0-5.88-19.65,59.55844,59.55844,0,0,0-9.22-13.93,8.35,8.35,0,0,0-10.57-1.7c-.26.15-.52.31-.76.48a8.751,8.751,0,0,0-2.97,3.63,6.28289,6.28289,0,0,0-.31.86005,8.93814,8.93814,0,0,0-.29,3.79,95.57036,95.57036,0,0,1-.9,31.11q-.765,3.915-1.87,7.76a77.51261,77.51261,0,0,0-5.27-5.93,65.32224,65.32224,0,0,0-16.45-12.12h-.01c-.03-.02-.05-.03-.08-.05-7.38-3.76-17.22-2.2-22.97.36-.38.16-.74.34-1.09.51-3,1.54-4.49,3.31-3.21,4.47.29.25.58.51.85.77a95.69757,95.69757,0,0,1,21.06,28.34v.01a93.30453,93.30453,0,0,1,5.21,13.16c1.93,6.23,3.53,13.14,7.3,18.22a16.379,16.379,0,0,0,1.25,1.53l33.68-.27c.08-.04.15-.07.23-.11l1.34.05c-.05-.24-.11005-.48-.17-.72v-.02c-.03-.13-.07-.27-.1-.39-.03-.1-.05-.19-.07-.27.06-.15.12-.29.19-.44C865.55737,725.11372,865.60742,725.00374,865.65741,724.88374Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#f0f0f0"
        />
        <path
          d="M865.48737,726.33375a.44053.44053,0,0,1-.69.3,18.26524,18.26524,0,0,0-4.51-2.39c-.01-.01-.01,0-.01,0a37.984,37.984,0,0,0-6.24-1.66c-.02,0-.03-.01-.05-.01-.86-.17-1.72-.32-2.58-.48-4.18-.77-8.43-1.7-12.05-4.08a12.2766,12.2766,0,0,1-5.63-8.33c-.53-3.35.13995-6.72.42-10.06.02-.24.04-.49.05-.73.02-.31.03-.61.03-.91a19.40059,19.40059,0,0,0-1.78-8.8,34.90484,34.90484,0,0,0-6.36-8.94q-1.995-2.145-4.16-4.13h-.01c-.06-.06-.11005-.11-.17-.16,0-.01-.01-.02-.02-.03a81.07415,81.07415,0,0,0-20.75-13.7c-.27-.12006-.55005-.25-.83-.37006-.73-.32995-1.46-.63995-2.2-.94995.35-.17.71-.35,1.09-.51a82.98906,82.98906,0,0,1,23.09,14.66c.23.2.46.41.68.62q2.59506,2.40006,4.94,5.03a32.50591,32.50591,0,0,1,5.99,9.16,20.41207,20.41207,0,0,1,1.39,8.58c-.02.56-.06,1.12-.11,1.69-.31,3.37-1,6.85-.23,10.22.88,3.84,3.86,6.52,7.32,8.16a31.63562,31.63562,0,0,0,7.16,2.22c5.1,1.07,10.37,1.59,14.83,4.33h.01c.06995.05.14.09.19995.13.01,0,.01,0,.01.01a9.48583,9.48583,0,0,1,.93.63c.02.01.04.03.06.04a.57133.57133,0,0,1,.08.07A.44417.44417,0,0,1,865.48737,726.33375Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#fff"
        />
        <path
          d="M822.54456,676.01669a12.20505,12.20505,0,0,0-.4048-15.79909c-.39207-.43523-1.08681.15359-.69422.58939a11.30162,11.30162,0,0,1,.34651,14.69723c-.3699.45429.38472.96417.75251.51247Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#fff"
        />
        <path
          d="M834.51715,697.953a23.52427,23.52427,0,0,1-16.57968-4.36164c-.47343-.34593-.98534.407-.51248.75251a24.46876,24.46876,0,0,0,17.26189,4.50361c.58286-.06946.41-.96357-.16973-.89448Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#fff"
        />
        <path
          d="M801.03741,662.11372c-.02.04-.04.07-.06.11005a7.76357,7.76357,0,0,1-5.39,3.92c-.27-.26-.56-.52-.85-.77a.33369.33369,0,0,1,.15-.05,6.90857,6.90857,0,0,0,5.26-3.47c.05-.07995.1-.17.14-.25a.45106.45106,0,0,1,.63-.12A.46977.46977,0,0,1,801.03741,662.11372Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#fff"
        />
        <path
          d="M297.68366,176.36968a67.89449,67.89449,0,0,0-67.8179,67.8179V504.08739a67.8945,67.8945,0,0,0,67.8179,67.8179H902.31634a67.8945,67.8945,0,0,0,67.8179-67.8179V244.18758a67.89449,67.89449,0,0,0-67.8179-67.8179Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#fff"
        />
        <path
          d="M902.31634,577.34844H297.68366a73.3436,73.3436,0,0,1-73.261-73.261V244.18758a73.3436,73.3436,0,0,1,73.261-73.261H902.31634a73.3436,73.3436,0,0,1,73.26105,73.261V504.08739A73.3436,73.3436,0,0,1,902.31634,577.34844ZM297.68366,181.81283a62.44539,62.44539,0,0,0-62.37475,62.37475V504.08739a62.44539,62.44539,0,0,0,62.37475,62.37475H902.31634a62.44539,62.44539,0,0,0,62.37475-62.37475V244.18758a62.44539,62.44539,0,0,0-62.37475-62.37475Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#e6e6e6"
        />
        <path
          d="M601.62347,230.17926H314.08a23.19146,23.19146,0,0,0-23.15155,23.15155v129.6921a21.81835,21.81835,0,0,0,.38106,4.10053c.09069.61682.23588,1.2156.38095,1.81438A23.22593,23.22593,0,0,0,314.08,406.17446H601.62347c.47175,0,.94351-.01816,1.39711-.05448h.32657v-.01816a1.38119,1.38119,0,0,0,.2722-.018c.0907,0,.19956-.01816.29026-.01816a.16309.16309,0,0,0,.09069-.01817c.19956-.01816.39923-.03632.58062-.05448.32658-.05438.65315-.0907.96168-.14507a.308.308,0,0,1,.12691-.01816.35874.35874,0,0,1,.1815-.03633.0666.0666,0,0,1,.05437-.01816c.19967-.03621.39923-.07253.59878-.127a2.0948,2.0948,0,0,0,.32658-.07253c.39922-.0907.79833-.1814,1.17939-.30842.1814-.05448.34474-.0907.52613-.14518.23588-.07254.48992-.16334.7258-.254a2.86042,2.86042,0,0,0,.3629-.127.09422.09422,0,0,0,.07253-.03621,16.2231,16.2231,0,0,0,1.54219-.6351c.43554-.19956.85281-.41728,1.27009-.635.16334-.07254.30841-.16335.47175-.254a.38141.38141,0,0,0,.10886-.07254c.41728-.254.83466-.50808,1.23377-.744.01816-.01805.01816-.03621.03632-.03621a.01779.01779,0,0,0,.01817-.01816,13.87442,13.87442,0,0,0,1.23376-.87087h.01816c.10886-.09081.19956-.16334.29026-.23588.127-.09081.254-.19967.3629-.29036.21771-.1814.43543-.3629.635-.5443a2.78525,2.78525,0,0,0,.34473-.30841c.30853-.2722.59878-.56245.889-.85282a5.1333,5.1333,0,0,0,.43555-.47176,7.52669,7.52669,0,0,0,.635-.68947c.18139-.23577.38106-.47165.56245-.70753a8.12348,8.12348,0,0,0,.59878-.78017c.32658-.43554.61683-.871.90719-1.34273.23588-.381.47176-.78018.68948-1.17929.10886-.19955.21771-.41738.32657-.6351.01816,0,.01816-.01805.01816-.03621.19956-.38106.38095-.76212.5443-1.16123.07253-.16335.14518-.30842.19955-.47176.14518-.30841.254-.635.38106-.96156.19956-.59878.39911-1.21572.56246-1.83255.14507-.59878.29025-1.19756.38095-1.81438a21.81835,21.81835,0,0,0,.38106-4.10053V253.33081A23.19146,23.19146,0,0,0,601.62347,230.17926Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#6c63ff"
        />
        <rect
          x="66.50584"
          y="96.4476"
          width="333.84657"
          height="1.81438"
          fill="#fff"
          opacity="0.3"
        />
        <rect
          x="66.50584"
          y="116.40582"
          width="333.84657"
          height="1.81438"
          fill="#fff"
          opacity="0.3"
        />
        <rect
          x="66.50584"
          y="136.36403"
          width="333.84657"
          height="1.81438"
          fill="#fff"
          opacity="0.3"
        />
        <rect
          x="66.50584"
          y="156.32225"
          width="333.84657"
          height="1.81438"
          fill="#fff"
          opacity="0.3"
        />
        <rect
          x="66.50584"
          y="176.28047"
          width="333.84657"
          height="1.81438"
          fill="#fff"
          opacity="0.3"
        />
        <rect
          x="66.50584"
          y="196.23869"
          width="333.84657"
          height="1.81438"
          fill="#fff"
          opacity="0.3"
        />
        <path
          d="M624.394,387.12344c-.0907.61682-.23588,1.2156-.38095,1.81438H291.18249a14.99887,14.99887,0,0,1-.21772-1.81438Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#fff"
          opacity="0.3"
        />
        <g opacity="0.1">
          <path
            d="M624.775,354.93629v28.08662a21.81835,21.81835,0,0,1-.38106,4.10053c-.0907.61682-.23588,1.2156-.38095,1.81438-.16335.61683-.3629,1.23377-.56246,1.83255-.127.32657-.23588.65315-.38106.96156-.05437.16334-.127.30841-.19955.47176-.16335.39911-.34474.78017-.5443,1.16123,0,.01816,0,.03621-.01816.03621-.10886.21772-.21771.43555-.32657.6351-.21772.39911-.4536.79834-.68948,1.17929-.29036.47175-.58061.90719-.90719,1.34273a8.12348,8.12348,0,0,1-.59878.78017c-.18139.23588-.38106.47176-.56245.70753a7.52669,7.52669,0,0,1-.635.68947,5.1333,5.1333,0,0,1-.43555.47176c-.29025.29037-.5805.58062-.889.85282a2.78525,2.78525,0,0,1-.34473.30841c-.19956.1814-.41728.3629-.635.5443-.10886.09069-.23588.19955-.3629.29036-.0907.07254-.1814.14507-.29026.23588h-.01816a13.87442,13.87442,0,0,1-1.23376.87087.01779.01779,0,0,1-.01817.01816c-.01816,0-.01816.01816-.03632.03621-.254.18151-.52613.34474-.79833.50808-.14518.0907-.29026.16323-.43544.23588a.38141.38141,0,0,1-.10886.07254c-.16334.09069-.30841.1815-.47175.254-.41728.21771-.83455.43543-1.27009.635a16.2231,16.2231,0,0,1-1.54219.6351.09422.09422,0,0,1-.07253.03621,2.86042,2.86042,0,0,1-.3629.127c-.23588.0907-.48992.1815-.7258.254-.18139.05448-.34473.0907-.52613.14518-.38106.127-.78017.21772-1.17939.30842a2.0948,2.0948,0,0,1-.32658.07253c-.19955.05449-.39911.09081-.59878.127a.0666.0666,0,0,0-.05437.01816.35874.35874,0,0,0-.1815.03633.308.308,0,0,0-.12691.01816c-.30853.05437-.6351.09069-.96168.14507-.18139.01816-.38106.03632-.58062.05448a.16309.16309,0,0,1-.09069.01817c-.19956.01816-.38106.03621-.56246.05437h-.03632c-.19956.01816-.39911.01816-.59867.03632-.3629.01816-.7258.01816-1.08869.01816H314.08a23.22593,23.22593,0,0,1-22.38954-17.23664h-.508a14.99887,14.99887,0,0,1-.21772-1.81438c-.01816-.34474-.03632-.70764-.03632-1.05238V354.42821a43.14762,43.14762,0,0,1,11.231,1.83254c9.87026,3.01183,19.4683,8.11025,29.774,8.11025.81649,0,1.66931-.03622,2.50386-.10886,10.85009-.90719,19.2869-7.63849,26.30856-15.24076.56245-.59878,1.12491-1.19755,1.65115-1.81438,1.32446-1.46965,2.59456-2.97562,3.82832-4.46342A97.67852,97.67852,0,0,1,379.416,329.06316c.78017-.6351,1.56034-1.23376,2.35867-1.81438a33.5112,33.5112,0,0,1,16.00288-6.40483c.74385-.07253,1.48781-.127,2.23166-.14507,7.76561-.23588,15.05936,2.55823,21.70006,6.5499.96157.58062,1.92324,1.17928,2.8486,1.81438a108.35117,108.35117,0,0,1,9.16261,6.949A175.16547,175.16547,0,0,0,447.87262,347.207c.3629.254.7258.508,1.08859.72569.56245.38106,1.14307.744,1.72368,1.08869a41.9322,41.9322,0,0,0,16.4021,6.187c.19956.03632.41728.07265.635.0907,9.453,1.10686,18.2527-1.68737,26.2904-6.2777.99789-.58061,2.01394-1.17939,2.99378-1.81438a123.97436,123.97436,0,0,0,17.58138-14.15217c1.41516-1.32458,2.8486-2.6672,4.33629-3.99167.67143-.59877,1.34274-1.21571,2.03221-1.81438,10.77734-9.47114,23.20593-18.14384,37.88423-18.14384.61694,0,1.25193.01817,1.887.05438,10.55973.50808,19.8312,5.62465,27.61486,12.12007a84.69952,84.69952,0,0,1,6.47737,5.96939c.09069.0907.16334.16323.254.254.508.508,1.016,1.0341,1.48781,1.56034,5.80605,6.07814,11.15839,12.57367,17.47252,18.14384.68947.635,1.397,1.23377,2.1228,1.81438a59.24951,59.24951,0,0,0,6.89463,4.93507C623.61379,354.30119,624.1944,354.62777,624.775,354.93629Z"
            transform="translate(-224.42261 -170.92653)"
          />
        </g>
        <g opacity="0.1">
          <path
            d="M624.775,327.52087v55.502a21.81835,21.81835,0,0,1-.38106,4.10053c-.0907.61682-.23588,1.2156-.38095,1.81438-.16335.61683-.3629,1.23377-.56246,1.83255-.127.32657-.23588.65315-.38106.96156-.05437.16334-.127.30841-.19955.47176-.16335.39911-.34474.78017-.5443,1.16123,0,.01816,0,.03621-.01816.03621-.10886.21772-.21771.43555-.32657.6351-.21772.39911-.4536.79834-.68948,1.17929-.29036.47175-.58061.90719-.90719,1.34273a8.12348,8.12348,0,0,1-.59878.78017c-.18139.23588-.38106.47176-.56245.70753a7.52669,7.52669,0,0,1-.635.68947,5.1333,5.1333,0,0,1-.43555.47176c-.29025.29037-.5805.58062-.889.85282a2.78525,2.78525,0,0,1-.34473.30841c-.19956.1814-.41728.3629-.635.5443-.10886.09069-.23588.19955-.3629.29036-.0907.07254-.1814.14507-.29026.23588h-.01816a13.87442,13.87442,0,0,1-1.23376.87087.01779.01779,0,0,1-.01817.01816c-.01816,0-.01816.01816-.03632.03621-.254.18151-.52613.34474-.79833.50808-.14518.0907-.29026.16323-.43544.23588a.38141.38141,0,0,1-.10886.07254c-.16334.09069-.30841.1815-.47175.254-.41728.21771-.83455.43543-1.27009.635a16.2231,16.2231,0,0,1-1.54219.6351.09422.09422,0,0,1-.07253.03621,2.86042,2.86042,0,0,1-.3629.127c-.23588.0907-.48992.1815-.7258.254-.18139.05448-.34473.0907-.52613.14518-.38106.127-.78017.21772-1.17939.30842a2.0948,2.0948,0,0,1-.32658.07253c-.19955.05449-.39911.09081-.59878.127a.0666.0666,0,0,0-.05437.01816.35874.35874,0,0,0-.1815.03633.308.308,0,0,0-.12691.01816c-.30853.05437-.6351.09069-.96168.14507-.18139.01816-.38106.03632-.58062.05448a.16309.16309,0,0,1-.09069.01817c-.0907,0-.19956.01816-.29026.01816a1.38119,1.38119,0,0,1-.2722.018.95767.95767,0,0,1-.23588.01816h-.09069c-.0907.01816-.19956.01816-.30842.03632-.3629.01816-.7258.01816-1.08869.01816H314.08a23.22593,23.22593,0,0,1-22.38954-17.23664c-.14507-.59878-.29026-1.19756-.38095-1.81438a21.81835,21.81835,0,0,1-.38106-4.10053V350.70875c.635-.5443,1.25193-1.10675,1.86886-1.68737.635-.59878,1.25182-1.19755,1.86876-1.81438a139.23351,139.23351,0,0,0,14.71463-18.14384c.14518-.19955.29036-.38106.41738-.58061.29025-.41728.5805-.8165.889-1.23377a142.58682,142.58682,0,0,1,14.71462-18.14384c.61694-.61693,1.23377-1.21571,1.86887-1.81438,6.74946-6.35034,14.44242-11.08586,23.51434-12.21088,12.50113-1.56034,24.13128,4.22755,34.41891,12.21088.762.59867,1.50586,1.19745,2.24982,1.81438,3.51991,2.86665,6.85831,5.98745,10.01532,9.09008.83466.83455,1.68748,1.66921,2.54019,2.50386,2.19544,2.19533,4.44526,4.39078,6.71324,6.5499.65315.61683,1.28825,1.21561,1.9414,1.81438,9.07192,8.40061,18.88768,15.78516,30.55416,18.14384.79833.16323,1.61483.30841,2.43132.41727a40.6162,40.6162,0,0,0,13.245-.41727c.7258-.127,1.43332-.29036,2.15912-.47176,10.92262-2.70341,21.0468-9.50735,30.20953-17.67208.65315-.59877,1.32446-1.19755,1.97761-1.81438,4.68115-4.3364,9.12641-8.98122,13.28131-13.5535,1.37894-1.524,2.79411-3.06632,4.20938-4.59034.58061-.59877,1.14307-1.19755,1.70552-1.81438a153.33059,153.33059,0,0,1,19.84936-18.14383c.85271-.63511,1.70553-1.23377,2.55824-1.81439,9.59816-6.5499,20.08524-10.75928,31.60664-10.088,9.50735.5443,18.19821,4.46332,26.0182,10.088.79833.58062,1.59666,1.17928,2.395,1.81439a108.69841,108.69841,0,0,1,16.20244,16.09357c.56245.67131,1.12491,1.36079,1.68736,2.05026.29036.34474.56245.70764.85282,1.05226l.59866.76212c4.80817,6.00561,9.43482,12.24709,14.35184,18.14384Z"
            transform="translate(-224.42261 -170.92653)"
          />
        </g>
        <g opacity="0.1">
          <path
            d="M624.775,304.6052v78.41771a21.81835,21.81835,0,0,1-.38106,4.10053c-.0907.61682-.23588,1.2156-.38095,1.81438-.16335.61683-.3629,1.23377-.56246,1.83255-.127.32657-.23588.65315-.38106.96156-.05437.16334-.127.30841-.19955.47176-.16335.39911-.34474.78017-.5443,1.16123,0,.01816,0,.03621-.01816.03621-.10886.21772-.21771.43555-.32657.6351-.21772.39911-.4536.79834-.68948,1.17929-.29036.47175-.58061.90719-.90719,1.34273a8.12348,8.12348,0,0,1-.59878.78017c-.18139.23588-.38106.47176-.56245.70753a7.52669,7.52669,0,0,1-.635.68947,5.1333,5.1333,0,0,1-.43555.47176c-.29025.29037-.5805.58062-.889.85282a2.78525,2.78525,0,0,1-.34473.30841c-.19956.1814-.41728.3629-.635.5443-.10886.09069-.23588.19955-.3629.29036-.0907.07254-.1814.14507-.29026.23588h-.01816a13.87442,13.87442,0,0,1-1.23376.87087.01779.01779,0,0,1-.01817.01816c-.01816,0-.01816.01816-.03632.03621-.254.18151-.52613.34474-.79833.50808-.14518.0907-.29026.16323-.43544.23588a.38141.38141,0,0,1-.10886.07254c-.16334.09069-.30841.1815-.47175.254-.41728.21771-.83455.43543-1.27009.635a16.2231,16.2231,0,0,1-1.54219.6351.09422.09422,0,0,1-.07253.03621,2.86042,2.86042,0,0,1-.3629.127c-.23588.0907-.48992.1815-.7258.254-.18139.05448-.34473.0907-.52613.14518-.38106.127-.78017.21772-1.17939.30842a2.0948,2.0948,0,0,1-.32658.07253c-.19955.05449-.39911.09081-.59878.127a.0666.0666,0,0,0-.05437.01816.35874.35874,0,0,0-.1815.03633.308.308,0,0,0-.12691.01816c-.30853.05437-.6351.09069-.96168.14507-.18139.01816-.38106.03632-.58062.05448a.16309.16309,0,0,1-.09069.01817c-.0907,0-.19956.01816-.29026.01816a1.38119,1.38119,0,0,1-.2722.018.0634.0634,0,0,1-.03632.01816h-.29025c-.4536.03632-.92536.05448-1.39711.05448H314.08a23.22593,23.22593,0,0,1-22.38954-17.23664c-.14507-.59878-.29026-1.19756-.38095-1.81438a21.81835,21.81835,0,0,1-.38106-4.10053V336.17552q2.74881-3.56526,5.51568-7.11236c.47176-.61694.94352-1.21571,1.41527-1.81438,2.4857-3.19333,4.98956-6.35034,7.56595-9.43482,2.46754-2.95745,5.0622-5.87858,7.76562-8.709.58061-.59877,1.16112-1.21571,1.7599-1.81438a100.85065,100.85065,0,0,1,23.46-18.14383c1.1794-.65316,2.37684-1.25193,3.59256-1.81439a56.0621,56.0621,0,0,1,20.52067-5.35245,56.98994,56.98994,0,0,1,27.1069,5.35245c1.27.54429,2.5219,1.16123,3.75567,1.81439,8.87236,4.57217,17.20043,10.977,25.00226,18.14383.67131.58062,1.3063,1.19745,1.95957,1.81438,6.187,5.80605,12.04742,12.02938,17.63575,18.14384.41738.4536.83466.92535,1.25193,1.37895.127.14507.2722.29025.39922.43543,5.44315,5.98745,11.24909,12.04754,17.418,17.67208.16334.16323.34474.30842.52613.47176.67131.61683,1.34274,1.2156,2.0321,1.81438,2.43132,2.15912,4.93518,4.22744,7.47536,6.187a97.28013,97.28013,0,0,0,19.54084,11.95684c1.46964.67131,2.95745,1.27009,4.46342,1.81438a53.6583,53.6583,0,0,0,26.05452,3.08448,51.91031,51.91031,0,0,0,11.81166-3.08448c1.45148-.54429,2.86675-1.16123,4.26375-1.81438,9.19894-4.35457,17.50885-10.94079,25.38332-18.14384.65315-.59878,1.30631-1.19755,1.95946-1.81438,4.48158-4.20938,8.836-8.58211,13.13612-12.80954,1.81438-1.77818,3.66509-3.5744,5.57017-5.3343.65326-.59877,1.32457-1.19755,1.99589-1.81438,2.28614-2.05026,4.64481-4.0642,7.076-5.96939a90.8935,90.8935,0,0,1,19.45025-12.17445c.59867-.2722,1.21561-.52624,1.81439-.76212.92535-.381,1.85059-.72568,2.77595-1.05226A48.65691,48.65691,0,0,1,624.775,304.6052Z"
            transform="translate(-224.42261 -170.92653)"
          />
        </g>
        <circle cx="138.17399" cy="116.40582" r="5.44315" fill="#fff" />
        <circle cx="221.63563" cy="176.28047" r="5.44315" fill="#fff" />
        <circle cx="334.12741" cy="136.36403" r="5.44315" fill="#fff" />
        <path
          d="M806.14077,353.73233H677.79307a4.63111,4.63111,0,1,0,0,9.26221h128.3477a4.6311,4.6311,0,1,0,0-9.26221Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#e6e6e6"
        />
        <path
          d="M806.14077,423.86046H677.79307a4.6311,4.6311,0,1,0,0,9.26221h128.3477a4.6311,4.6311,0,1,0,0-9.26221Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#e6e6e6"
        />
        <path
          d="M806.14077,493.98859H677.79307a4.6311,4.6311,0,1,0,0,9.2622h128.3477a4.6311,4.6311,0,1,0,0-9.2622Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#e6e6e6"
        />
        <circle cx="659.48782" cy="187.78333" r="11.5653" fill="#f2f2f2" />
        <path
          d="M882.33268,364.72906a1.2861,1.2861,0,0,1-1.02908-.5147l-3.15519-4.207a1.28645,1.28645,0,1,1,2.05837-1.54367l2.06424,2.7521,5.30172-7.95247a1.2865,1.2865,0,0,1,2.14087,1.42725l-6.31038,9.46557a1.287,1.287,0,0,1-1.03474.57249Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#fff"
        />
        <circle cx="659.48782" cy="257.91146" r="11.5653" fill="#f2f2f2" />
        <path
          d="M882.33268,434.85719a1.2861,1.2861,0,0,1-1.02908-.5147l-3.15519-4.207a1.28645,1.28645,0,1,1,2.05837-1.54367l2.06424,2.7521,5.30172-7.95247a1.2865,1.2865,0,1,1,2.14087,1.42724l-6.31038,9.46558a1.28705,1.28705,0,0,1-1.03474.57249Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#fff"
        />
        <circle cx="659.48782" cy="328.03959" r="11.5653" fill="#f2f2f2" />
        <path
          d="M806.14077,283.6042H677.79307a4.6311,4.6311,0,1,0,0,9.26221h128.3477a4.6311,4.6311,0,1,0,0-9.26221Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#e6e6e6"
        />
        <circle cx="659.48782" cy="117.6552" r="11.5653" fill="#6c63ff" />
        <path
          d="M882.33268,294.60093a1.28612,1.28612,0,0,1-1.02908-.51469l-3.15519-4.207a1.28645,1.28645,0,1,1,2.05837-1.54367l2.06424,2.7521,5.30172-7.95247a1.2865,1.2865,0,1,1,2.14087,1.42725l-6.31038,9.46557a1.287,1.287,0,0,1-1.03474.57249Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#fff"
        />
        <circle cx="621.11583" cy="117.6552" r="11.5653" fill="#f2f2f2" />
        <circle cx="621.11583" cy="187.78333" r="11.5653" fill="#f2f2f2" />
        <circle cx="621.11583" cy="257.91146" r="11.5653" fill="#f2f2f2" />
        <circle cx="621.11583" cy="328.03959" r="11.5653" fill="#f2f2f2" />
        <path
          d="M882.33268,504.98532a1.2861,1.2861,0,0,1-1.02908-.5147l-3.15519-4.207a1.28645,1.28645,0,1,1,2.05837-1.54368l2.06424,2.75211,5.30172-7.95248a1.2865,1.2865,0,0,1,2.14087,1.42725l-6.31038,9.46558a1.28705,1.28705,0,0,1-1.03474.57249Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#fff"
        />
        <path
          d="M865.65741,724.88374a.42584.42584,0,0,1-.15.35.57519.57519,0,0,1-.27.11.39112.39112,0,0,1-.46-.29c-1.38-4.64-4.76-8.2-7.96-11.69-2.88-3.13-5.71-6.43-7.16-10.5a12.279,12.279,0,0,1,.52-10.05,17.72487,17.72487,0,0,1,1.73-2.62c1.43-1.82,3.13-3.44,4.66-5.16.16-.18005.32-.37.47-.55.21-.23.4-.47.58-.71a19.34546,19.34546,0,0,0,3.87-8.1,34.7963,34.7963,0,0,0,.31-10.97q-.29993-2.91-.83-5.78c-.02-.09-.03-.17-.05-.25a80.77148,80.77148,0,0,0-8.32-23.47c-.15-.27-.29-.54-.44-.8-.64-1.16-1.3-2.30005-2-3.42.24-.17.5-.33.76-.48a82.83115,82.83115,0,0,1,5.97,11.63,81.254,81.254,0,0,1,4.87,16.05c.07.3.12.61.17.91.42,2.31.73,4.65.92,6.98a32.336,32.336,0,0,1-.74,10.92,20.376,20.376,0,0,1-4.07,7.71q-.51.645-1.08,1.26c-1.52,1.66-3.2,3.27-4.57,5.08a15.11022,15.11022,0,0,0-1.77,2.94c-1.61,3.6-.85,7.54.93,10.92,3.22,6.15,9.36005,10.34,12.63,16.37a18.607,18.607,0,0,1,1.46,3.49A.50132.50132,0,0,1,865.65741,724.88374Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#fff"
        />
        <path
          d="M861.51365,659.19926a12.20506,12.20506,0,0,0,9.18893-12.85841c-.051-.58356-.96023-.53171-.90915.05263a11.30161,11.30161,0,0,1-8.57207,11.94353c-.56886.14-.27332,1.00146.29229.86225Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#fff"
        />
        <path
          d="M857.86593,683.92248A23.52433,23.52433,0,0,1,847.254,670.45783c-.16973-.56123-1.03177-.26827-.86225.29229a24.4688,24.4688,0,0,0,11.07117,13.98874c.5072.29546.90747-.52252.403-.81638Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#fff"
        />
        <path
          d="M852.7074,635.15376c-.04.02-.07.03-.11.05a7.70346,7.70346,0,0,1-5.72.27,6.28289,6.28289,0,0,1,.31-.86005,6.83258,6.83258,0,0,0,4.97-.21c.09-.03.17-.07.26-.11005a.4575.4575,0,0,1,.58.28A.48084.48084,0,0,1,852.7074,635.15376Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#fff"
        />
        <path
          d="M802.86062,481.92005a9.36228,9.36228,0,0,0-2.57888-14.1224l6.03863-32.71779-15.92105,6.74026-3.29352,30.036a9.413,9.413,0,0,0,15.75482,10.06392Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#ffb6b6"
        />
        <path
          d="M812.57739,385.08375l-5.06-17.01-35.68-55.67a26.34992,26.34992,0,0,0-7.01-5.78,26.562,26.562,0,0,0-34.68,38.66,24.72027,24.72027,0,0,0,2.43,2.9l46.21,47.66,2.63,2.72,4.16,10.52,1.64,47.97,1.47.35,12.95,3.05,1.81.43,3.03-15.67,1.9-7.49a79.542,79.542,0,0,0,2.43-19.54c0-2.03-.07-4.07-.23-6.1Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#3f3d56"
        />
        <polygon
          points="539.105 544.946 526.715 544.946 520.821 497.156 539.107 497.157 539.105 544.946"
          fill="#ffb6b6"
        />
        <path
          d="M763.19739,711.82374l-13.22-5.37-.39-.16-7.3,5.53a15.54247,15.54247,0,0,0-15.53,14.87c-.02.22-.02.45-.02.68v.51h39.95v-16.06Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#2f2e41"
        />
        <polygon
          points="515.51 520.231 504.831 526.514 475.514 488.316 491.274 479.043 515.51 520.231"
          fill="#ffb6b6"
        />
        <path
          d="M747.30737,697.45375l-1.44995-2.47-5.25-8.92-2.73,1.61-.28.16-14.12,2.08-.42005.06006-3.48,8.47a15.54944,15.54944,0,0,0-5.52,21.29l.26.43,34.43-20.26Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#2f2e41"
        />
        <path
          d="M779.21956,423.71246c5.809,17.51982,5.19483,36.5371-1.39627,56.9478L776.103,550.825l-5.52558,44.25873a75.7829,75.7829,0,0,1,5.04271,27.17369c-.02349,24.35193-1.66085,58.94778-9.96248,75.19971H746.01211l-4.43472-72.3734-5.29208-36.38819-.65241-38.99314-.569-34.00831L713.70294,546.93l-20.757,30.35273,20.63144,34.801,18,56-19,16-21.55387-40.86343-10.44613-12.13657L652.0614,569.353l2.5627-8.59494a203.32945,203.32945,0,0,1,22.78278-50.22981l0,0,28.364-65.83044Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#2f2e41"
        />
        <path
          d="M781.73737,417.86372l-3.24-6.48.29-15.54.97-52.54a50.40424,50.40424,0,0,0-14.93-36.68,49.36031,49.36031,0,0,0-9.56-7.43l-6.96-4.16-3.52-8.94-32.46.79-.07,8.67-.03,3.05-11.63,18.54.01.08.24,33.74.48,67.16,3.21,10.41-4.85,12.12,2.58,7.72,2.06-.33,69.38-11.09a13.62235,13.62235,0,0,0,7.53-5.98,12.39286,12.39286,0,0,0,.89-1.74A13.6477,13.6477,0,0,0,781.73737,417.86372Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#3f3d56"
        />
        <circle cx="501.15853" cy="74.55104" r="29.49581" fill="#ffb6b6" />
        <path
          d="M743.92951,269.91828c3.11538-2.19191,6.27-6.36464,8.37132-9.48836a35.418,35.418,0,0,0,5.07724-28.35134,10.799,10.799,0,0,0-2.6107-5.16613,4.64357,4.64357,0,0,0-5.36785-.98026,9.67951,9.67951,0,0,0-.49932-7.6741,17.05878,17.05878,0,0,0-5.12609-5.9366,28.40871,28.40871,0,0,0-28.97472-3.02462c-1.83046.87913,1.10421-5.75566-.81534-5.09324a7.86193,7.86193,0,0,1-5.93489-.0222c-1.82627-.88782-7.76266,4.61941-7.09343,2.70223a8.95783,8.95783,0,0,0-1.867,15.029c1.53993,1.26378,3.45059,1.97732,5.13232,3.04517a14.6133,14.6133,0,0,1,4.73027,18.79462,19.36034,19.36034,0,0,1,5.66333-2.55476,6.55283,6.55283,0,0,1,5.85079,1.32188,7.36207,7.36207,0,0,1,1.86036,5.53078c-.03838,2.00235-.48727,3.98073-.513,5.98328-.07557,5.876-3.06687,17.08687,1.53045,20.146C726.97132,276.59373,739.67588,272.911,743.92951,269.91828Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#2f2e41"
        />
        <path
          d="M561.7215,317.221a9.36225,9.36225,0,0,0,14.16776,2.31676l28.786,16.68193-.99821-17.2602-27.18261-13.19527A9.413,9.413,0,0,0,561.7215,317.221Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#ffb6b6"
        />
        <path
          d="M747.61737,312.05372a26.57075,26.57075,0,0,0-35.36-16.5c-.32.13-.64.27-.96.41l-63.86,29.07-24.86-2.95-32.18-11.24-.82,1.27-7.23,11.17-1.01,1.56,34.52,20.41,3.66.76a24.73314,24.73314,0,0,1,15.68,10.67l13.38,4.4,52.27-10.12,29.3-5.68,1.66-.32a26.63789,26.63789,0,0,0,17.07-24.84A26.37168,26.37168,0,0,0,747.61737,312.05372Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#3f3d56"
        />
        <path
          d="M896.21483,729.07347H548.22678a1.19068,1.19068,0,1,1,0-2.38136H896.21483a1.19068,1.19068,0,0,1,0,2.38136Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#ccc"
        />
        <path
          d="M521.67365,450.86213H310.326a4.63111,4.63111,0,0,0,0,9.26221h211.3477a4.63111,4.63111,0,1,0,0-9.26221Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#e6e6e6"
        />
        <circle cx="375.02071" cy="284.91313" r="11.5653" fill="#6c63ff" />
        <path
          d="M597.86557,461.85886a1.2861,1.2861,0,0,1-1.02908-.5147l-3.1552-4.207a1.28645,1.28645,0,1,1,2.05838-1.54367l2.06423,2.7521,5.30172-7.95247a1.2865,1.2865,0,1,1,2.14087,1.42725l-6.31038,9.46557a1.287,1.287,0,0,1-1.03474.57249Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#fff"
        />
        <circle cx="336.64871" cy="284.91313" r="11.5653" fill="#f2f2f2" />
        <path
          d="M520.67365,506.86213H309.326a4.63111,4.63111,0,0,0,0,9.26221h211.3477a4.6311,4.6311,0,1,0,0-9.26221Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#e6e6e6"
        />
        <circle cx="374.02071" cy="340.91313" r="11.5653" fill="#f2f2f2" />
        <path
          d="M596.86557,517.85886a1.2861,1.2861,0,0,1-1.02908-.5147l-3.1552-4.207a1.28645,1.28645,0,1,1,2.05838-1.54367l2.06423,2.7521,5.30172-7.95247a1.2865,1.2865,0,1,1,2.14087,1.42725l-6.31038,9.46557a1.287,1.287,0,0,1-1.03474.57249Z"
          transform="translate(-224.42261 -170.92653)"
          fill="#fff"
        />
        <circle cx="335.64871" cy="340.91313" r="11.5653" fill="#f2f2f2" />
      </svg>
    </div>
  );
};
