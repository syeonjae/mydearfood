"use client";
import React, { useContext, useEffect, useRef } from "react";
import styles from "./Content.module.css";
import { SidebarContext } from "@/context/sidebar.context";
const Content = () => {
  const { state } = useContext(SidebarContext);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    if (state.isOpen) contentRef.current.style.marginLeft = "0";
  }, [state.isOpen]);
  return (
    <div ref={contentRef} className={styles.wrapper}>
      <h1>hello</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
        mollitia minus sint incidunt alias, aut nostrum voluptatum, saepe,
        veniam molestiae laboriosam odit ipsa facere possimus cupiditate non
        culpa libero reiciendis! Sequi facere doloribus sunt obcaecati! Expedita
        blanditiis id qui repellendus consectetur facilis minus quos, quibusdam
        sed nobis repudiandae voluptatum sit magni accusantium, aut provident
        ipsam necessitatibus esse nostrum ipsum libero? Vero, neque at dicta ut,
        itaque magnam velit quos aliquid repellendus natus ducimus officia qui,
        beatae nobis perspiciatis tenetur! Nobis quam quas assumenda libero
        neque id accusantium? Dolore, culpa omnis! Ipsam nemo amet laudantium
        officia sunt perspiciatis saepe inventore totam soluta consequatur sint
        porro itaque eius quis, maiores, aut fugiat labore tenetur aperiam!
        Doloremque maiores alias accusantium dolorum eum quisquam? Eum, porro
        dolores modi voluptatum numquam impedit in expedita facilis possimus
        libero exercitationem distinctio, maiores accusantium tempora, non alias
        unde? Dolores temporibus, repellat iure labore sit ipsum porro tempore
        tempora! Voluptatibus est fugit, doloribus porro temporibus laboriosam
        cupiditate perspiciatis veniam eos ex harum voluptatem quidem alias
        repellendus! Earum inventore, sunt expedita sint provident pariatur
        aperiam eum dolorum esse, optio illo. Dolorum odio asperiores qui
        voluptatum in maiores saepe quo magnam fugiat natus suscipit reiciendis
        doloremque cum aperiam fuga voluptatibus quasi eum ex nostrum, numquam,
        consequatur error quibusdam! Iste, nesciunt architecto? Quod rerum,
        exercitationem temporibus esse perferendis consequatur non nobis
        voluptate iure cum labore pariatur deleniti provident quas asperiores
        quaerat corrupti voluptatibus! Ducimus iusto voluptates autem dolor
        doloremque, laborum totam omnis! Fugiat nobis id rerum. Aspernatur
        maiores quia facere ipsum expedita fuga, suscipit hic beatae alias.
        Magnam eveniet laudantium totam accusamus fugiat porro perferendis ipsam
        quibusdam rem, explicabo modi nemo id. Maiores labore laudantium minus
        eligendi aspernatur sint a commodi, quisquam expedita provident soluta
        nulla explicabo minima perferendis, est distinctio aliquid dolores
        libero eveniet sit rem? Ducimus corrupti magnam aspernatur neque.
        Veritatis, porro cumque. Deserunt facere nulla autem inventore nihil
        vero nesciunt doloremque, a commodi fuga architecto labore non, cumque
        optio pariatur dolor perspiciatis tempore beatae unde natus quidem
        eaque. Aut. Rerum, voluptate tempora. Officia, iste dolores facere
        blanditiis error sint vel, mollitia reiciendis voluptates sequi
        accusamus adipisci, assumenda nobis. Quam fugit illo neque sit ipsum.
        Vitae eum molestiae veritatis voluptatibus! Unde sed velit porro et quos
        aspernatur odio obcaecati quia! Assumenda laudantium sequi saepe impedit
        numquam nemo illum doloremque laborum, autem a fuga id veritatis ad, non
        quis possimus fugiat. Tempora praesentium numquam animi expedita
        provident eaque ex adipisci molestiae odit cum delectus ducimus
        inventore voluptatem aut, magni iusto, nesciunt aspernatur sequi esse.
        Ipsa reiciendis, porro alias ducimus praesentium saepe. Labore odit
        nisi, accusamus nihil odio laboriosam nam voluptatem consequatur impedit
        laborum, eius nesciunt, exercitationem quo. Eos, asperiores
        exercitationem? Similique quam numquam, harum mollitia sequi est
        blanditiis error possimus amet. Necessitatibus repellendus dolor et vel,
        amet ullam libero aut laudantium atque fugiat possimus praesentium
        dolorum debitis nisi reprehenderit porro? Eos consequatur expedita
        maiores eveniet? At neque esse quis natus distinctio. Dolore, omnis?
        Unde, harum repudiandae dignissimos, qui quia sequi fuga a laudantium
        sint perferendis tenetur quod laboriosam in incidunt nulla nemo quas. Ab
        rerum reprehenderit sapiente voluptatem nihil quibusdam recusandae.
        Error exercitationem, aspernatur ad quis a, nostrum porro amet quibusdam
        eveniet esse vero aliquid cumque fuga voluptatibus non magnam dolorum
        quod maxime voluptate accusamus minima minus? Pariatur similique quaerat
        optio! Amet quas nisi maxime vero numquam odio veritatis, ipsa
        voluptatibus magni! Repellat laudantium at similique. Quae nulla
        pariatur nam, odio commodi minima, illum eaque non, eligendi eius quod
        expedita officia? Praesentium sed veritatis iure fugit at, aut officia
        perferendis voluptate cumque nulla eveniet perspiciatis necessitatibus
        quo sunt nostrum nobis impedit dignissimos! Magni voluptatem illo iusto
        at cumque molestiae ratione quam. Numquam, veritatis, facilis commodi
        magni eveniet hic corrupti doloremque, tempora quibusdam autem culpa
        perspiciatis maiores. Quibusdam, ut. Harum numquam laboriosam at, quo ea
        pariatur voluptas minima praesentium porro. Tenetur, dicta! Voluptatibus
        id quis error porro asperiores sint, libero accusamus ratione. Magni
        consequuntur, fugit velit rerum minus amet voluptates iste distinctio
        sint quas id non blanditiis voluptatibus perspiciatis architecto! Harum,
        enim. Temporibus provident sequi eligendi possimus eius, dolorum
        voluptatem, reiciendis, molestias sed delectus animi est tempore dicta.
        Cupiditate obcaecati veniam quisquam expedita, ducimus excepturi eius
        eaque, odit incidunt, maiores amet corporis. Suscipit reiciendis harum
        dicta, fugiat non, iusto libero ullam, asperiores quod odit rem tempore
        voluptate illum autem a? Reiciendis error doloremque assumenda vel
        perspiciatis pariatur neque corrupti ducimus totam odio? Iste quibusdam
        voluptatem tenetur eaque nesciunt molestias optio, distinctio
        consectetur quia earum unde cumque repellendus, maiores veniam magni
        placeat nostrum quod aliquam, nihil magnam tempora blanditiis eius.
        Nemo, aspernatur! Unde! Delectus, a incidunt quos libero totam quaerat
        similique numquam, quisquam, itaque deleniti doloribus? Sapiente
        cupiditate nemo quo officiis perspiciatis vero quos nesciunt ipsa, modi
        et, sequi adipisci sed doloremque consequuntur? Placeat repellat non
        amet, illo ullam, voluptatem reprehenderit quod, quasi molestiae totam
        aliquam error doloremque atque culpa voluptas alias consectetur vitae
        perferendis nostrum tempora eos iure! Error iure aliquam beatae. Ratione
        dicta magnam itaque nulla neque, explicabo non iusto quam minus minima
        consequuntur culpa a mollitia! Asperiores consequuntur id inventore
        architecto optio ut! Quisquam itaque, ab alias unde quasi similique?
        Nostrum accusamus culpa id autem ex sunt tempore dolores, quae
        perferendis quam ut ipsam vel praesentium earum perspiciatis cum!
        Numquam autem quaerat omnis nulla accusamus! Magnam numquam neque itaque
        vel. Pariatur a similique magnam placeat sed. Pariatur maxime culpa
        aspernatur modi, dolor minus eum magnam, illum voluptatem molestiae
        delectus doloremque rem officiis quos atque consectetur. Atque aliquam
        explicabo recusandae laborum! Velit perspiciatis quo omnis eligendi
        doloremque iste sapiente facilis asperiores cum impedit sequi,
        laboriosam reiciendis, molestias sit nesciunt hic! Id vitae in tempore
        quibusdam quam hic fugiat non sit impedit. Reiciendis possimus quod
        veniam, debitis nostrum omnis veritatis deleniti sunt iusto dolor cumque
        fugit harum exercitationem fuga odit est ex nam dolore cum? Rerum aut
        totam animi vitae perspiciatis ad? Expedita aperiam molestias optio iure
        laudantium harum facilis iste voluptatum corporis, odit sunt, id libero
        nemo omnis animi quaerat assumenda laboriosam veniam consectetur sint,
        necessitatibus doloribus distinctio blanditiis obcaecati? Ducimus!
        Aliquid et ipsam modi quod culpa dolore. Repudiandae sint in dolores cum
        deleniti voluptate enim adipisci ipsa distinctio consequatur delectus
        recusandae ipsam error odit, debitis nobis modi iure accusantium
        obcaecati! Nam sapiente dolore cupiditate eos incidunt sed temporibus
        animi quam, blanditiis odio officiis dicta velit beatae. Porro qui
        explicabo suscipit itaque dignissimos corporis deleniti repudiandae quos
        voluptates officiis! Tempore, fuga. Voluptas porro officia distinctio.
        Exercitationem natus repellat ducimus minus impedit eligendi quibusdam
        incidunt officiis optio quia? Exercitationem, sapiente. Velit accusamus
        debitis hic quia commodi natus voluptates sunt alias soluta dolorum.
        Optio assumenda cupiditate magnam dolores possimus commodi totam,
        eveniet sed at nostrum quia asperiores eaque nam tempora. Assumenda ab
        quaerat corporis dicta, nulla, voluptatum, doloribus vel laudantium
        mollitia pariatur blanditiis? Iste quam nulla inventore aspernatur ex
        architecto beatae laudantium sed ea esse doloribus perspiciatis velit
        dolores magnam, quas et, recusandae adipisci, itaque id cupiditate
        deserunt! Excepturi distinctio aspernatur ratione explicabo! Sunt
        impedit voluptate totam aspernatur cupiditate rerum, cum provident.
        Veniam tempore vel minus hic temporibus aliquid, doloremque vero?
        Quibusdam odit optio sapiente eum saepe distinctio voluptate in officiis
        assumenda nulla. Sint neque eveniet molestias, maiores esse ipsa facilis
        dolore quis sapiente cupiditate sequi quibusdam reprehenderit
        exercitationem, placeat fugit eos distinctio voluptate labore numquam
        consequuntur officia nulla? Accusamus perspiciatis eum libero! Natus
        illum accusamus corporis amet labore possimus qui a porro blanditiis
        dolorum, fugit ratione quam soluta odio fuga vero harum numquam nostrum
        eum! Neque architecto culpa incidunt laboriosam laborum sapiente! Cumque
        labore velit quos! Tenetur natus, voluptatibus, magni praesentium est
        consequatur ut repellat voluptatum saepe voluptas labore temporibus,
        fugit aut nostrum qui ad omnis debitis dolor optio impedit et
        laudantium. In rerum ea cumque, libero sunt voluptatum officia
        obcaecati! Recusandae qui accusantium maxime quo dolorum hic? Voluptatem
        voluptatibus veritatis eaque nemo libero, quae commodi, ad labore itaque
        officiis at illum! Odit sit iure fugit possimus sint. Doloremque quasi
        at dolorem ex odio minus harum numquam, quia obcaecati. Ducimus esse
        accusantium architecto eos quod soluta consequuntur saepe error, nostrum
        in modi! Aspernatur eos vero ab recusandae. Repudiandae nam laborum
        cupiditate? Aliquam labore fuga placeat velit laudantium ullam
        perferendis, nam ut eum dignissimos nulla consectetur fugit odit! Dolor
        aliquam fugit et officia. Ad consequuntur expedita reiciendis quaerat!
        Veritatis ipsum beatae unde voluptate nobis quisquam praesentium quos
        consequuntur libero, quasi accusantium esse iusto mollitia eligendi
        aspernatur, alias aliquid fuga voluptatem adipisci, dolore eum.
        Obcaecati tempora, repellat corrupti, vitae sunt recusandae eum a autem
        quo tempore commodi minus eveniet accusantium. Tempora repellat quia
        rerum cumque totam iste pariatur a excepturi consequatur, velit
        veritatis iusto. Quaerat nisi mollitia ad voluptates quas laborum saepe
        magni magnam aliquid commodi, obcaecati odit voluptatum minus tempore
        error unde officiis inventore porro laudantium aut, quia minima ipsam
        asperiores aperiam? Esse? Impedit molestias suscipit aliquam odio. Et,
        voluptas. Ullam explicabo corrupti cumque, rerum iusto, velit atque,
        animi dicta cum eaque labore. Aliquam iste molestiae iusto explicabo
        dolor labore maxime ipsa sapiente? Aperiam laborum iste minus earum
        esse, veniam dolorem odit ipsum quo ipsam inventore reiciendis quidem,
        tenetur dignissimos quod tempore fuga, maiores quisquam. Aliquam officia
        asperiores exercitationem ex impedit, voluptatibus incidunt? Culpa
        facilis saepe corrupti doloremque iste sint commodi cumque libero
        quaerat quam quasi voluptatem molestiae cum nulla officia dolores nemo
        molestias, magnam, maiores tempora repellendus a itaque? Laboriosam,
        accusantium adipisci? Temporibus, non repellendus laborum libero
        molestiae ut, necessitatibus corporis quam rerum dignissimos nisi autem
        tenetur in labore! Repellendus, quae molestiae minima mollitia molestias
        repudiandae unde eius, libero odio laboriosam dolore. Consequuntur,
        adipisci neque molestias dolorum commodi repellendus quos saepe
        inventore quisquam, eos est possimus, tenetur expedita fugiat? Ex dolore
        eum inventore, ab, iure voluptas, sit beatae suscipit animi sunt
        doloremque. Sapiente facere quasi accusamus culpa ducimus officiis porro
        eaque error, repellat quae similique maxime, molestias quis, provident
        et suscipit tempora consequuntur voluptatibus? Laborum, tempore ipsam ut
        aspernatur quis quisquam facere! Repellendus rerum beatae minus omnis
        nisi corrupti animi excepturi iusto at. Qui mollitia dignissimos,
        commodi, saepe dolorum ipsa repudiandae aut earum repellendus ut, non
        cumque illum? Deleniti vitae suscipit accusantium! Minus dolorem eaque
        aliquam assumenda at consequatur, temporibus labore alias cumque
        voluptatem asperiores aliquid error maiores illo hic quam quisquam nobis
        nam voluptate rem corporis explicabo ab debitis. Voluptatem, ab? Rerum
        dolorum quod alias doloremque laudantium numquam, aut harum provident
        exercitationem expedita asperiores veniam eos, sapiente libero sit
        dicta? Quae optio hic saepe amet porro sint, tempore facilis earum at?
        Consequuntur architecto inventore expedita dolores laudantium? Error
        suscipit debitis nesciunt, ullam expedita omnis enim ea iure deserunt
        quis modi, a facilis praesentium dignissimos sed illo quibusdam impedit.
        Cumque, voluptatem in! Expedita molestias, quas, placeat quia unde, eum
        fugit quibusdam mollitia officia iste autem id. Aliquam, praesentium
        sequi magnam asperiores quasi iusto, voluptas fugit fuga repudiandae
        doloremque aut facere? Aspernatur, quaerat. Repellat harum ea aliquid
        recusandae atque corrupti doloribus magni. Quo asperiores ea harum enim
        maiores. Expedita optio cumque reiciendis illum obcaecati officia,
        laboriosam ipsam esse voluptate ea nobis quis voluptas. Pariatur
        doloribus beatae nobis quod cumque corrupti molestias culpa veniam
        perferendis, soluta in necessitatibus quaerat, reiciendis iusto alias
        consequuntur, unde consectetur sit quisquam distinctio debitis.
        Voluptate reiciendis culpa placeat eveniet? Perspiciatis recusandae illo
        labore quis tempora sapiente corporis et, blanditiis beatae illum vitae
        in? Maiores cum reprehenderit assumenda quae libero soluta tempore
        nostrum optio accusantium eveniet! Odio tenetur laboriosam eligendi!
        Optio repellat minima adipisci, laudantium impedit reiciendis aut culpa
        dicta repudiandae suscipit deleniti modi ab esse ut fugiat mollitia
        labore ex sunt accusamus in? Laboriosam aut voluptas eius quas. Odio.
        Porro, beatae dolore soluta voluptate et, excepturi, ab voluptates esse
        incidunt ducimus saepe placeat illo est voluptatum quo asperiores neque
        vero maxime minus nemo. Optio eius iure ipsa ea doloremque. Voluptates
        cum velit exercitationem necessitatibus? Quaerat officiis, non,
        explicabo accusamus, nemo eligendi iste fugiat unde optio libero hic
        blanditiis tenetur neque? Nisi eum amet doloribus unde iste ipsam ipsa
        soluta? Natus eius ipsa voluptatum animi ut nobis consectetur
        perferendis ratione delectus. Quia quidem eaque iste, qui cum alias
        reprehenderit ducimus odit at? Cumque provident aspernatur reprehenderit
        iusto laborum, dolorem voluptas? Possimus corrupti aperiam deserunt
        maiores ad reprehenderit omnis impedit rerum inventore rem explicabo ex,
        quo ullam sed aut quae modi sit laboriosam provident deleniti! Quia iure
        culpa voluptatem quos porro. Cumque laboriosam qui quia veritatis nobis
        accusamus odit, ea hic. Esse natus voluptatibus rem expedita ducimus
        repudiandae ea officia vero saepe sunt laboriosam, non adipisci dicta
        voluptate nostrum ex tempora. Itaque quos non dignissimos tempora
        architecto exercitationem quisquam rerum ea, praesentium necessitatibus
        nihil, pariatur quasi facilis officia nesciunt vero odit, sit distinctio
        impedit cum. Enim necessitatibus quo quibusdam repellendus laboriosam.
        Quisquam consectetur minus ipsam? Laudantium dicta, rerum vitae, rem
        officia velit corrupti tenetur at ea, aperiam iste tempore quas
        veritatis iusto ullam ipsam maiores? Tenetur illo eum dicta in vero.
        Modi reiciendis similique ullam, perspiciatis in eos quisquam culpa amet
        vel officia quibusdam distinctio repellendus ab repellat a praesentium
        sapiente corrupti tenetur dicta natus illum rerum asperiores voluptatem.
        Cupiditate, alias! Autem dolore blanditiis quisquam ducimus magni
        explicabo officiis deserunt deleniti provident accusantium adipisci eos
        vitae molestiae necessitatibus velit maiores, veniam saepe omnis numquam
        laudantium suscipit, atque aperiam iure? Laudantium, nisi. Omnis
        accusantium quam nemo, repellendus iure repellat expedita sint ratione
        ab, reiciendis a voluptas non autem dicta adipisci saepe aspernatur
        minus quia reprehenderit quidem? Doloremque perferendis in dolor
        voluptate quasi! Totam, dolores quaerat minima dicta impedit repellat
        error cumque tenetur provident excepturi voluptate maiores pariatur
        animi libero cupiditate aspernatur dolorem aliquid aperiam, nostrum
        ratione ex! Quam facere ipsa aspernatur rerum. Porro, perferendis. Illo
        explicabo aspernatur quibusdam at temporibus itaque molestiae sint
        reiciendis possimus et minima velit, fugiat sed amet adipisci magni
        deserunt earum doloribus vero saepe illum optio mollitia excepturi.
        Beatae eum, perspiciatis sint nostrum neque asperiores dolorum
        architecto nesciunt debitis. Officia neque corporis aspernatur, nihil
        eveniet fuga autem ea similique maxime nesciunt enim, fugiat alias
        exercitationem doloribus eum at? Deserunt voluptatem molestias ipsum
        culpa dicta quaerat sed saepe eum harum. Omnis eveniet sint hic quae
        voluptatem assumenda autem amet! Voluptate numquam libero earum quo
        facilis sequi fugit vero architecto. In illum provident nemo, vero iusto
        quo accusamus magnam aut officia placeat fuga, nulla deleniti dolor quod
        repudiandae qui esse eum, asperiores culpa consequatur rerum harum ea
        omnis nesciunt! Quos! Sequi quas dignissimos molestiae alias magni illo
        natus accusantium assumenda tempora. Saepe officiis veniam error
        necessitatibus optio corrupti nam, pariatur minus vero exercitationem
        iste aspernatur veritatis placeat quia unde suscipit! Eius aliquam,
        perspiciatis eos impedit amet nulla voluptatem. Eveniet nesciunt
        repudiandae praesentium blanditiis molestiae ex laboriosam sunt eaque
        eius? Inventore voluptates vel doloribus dolor libero sed! Pariatur
        minus asperiores sapiente. Pariatur atque corporis maiores nam adipisci
        suscipit tenetur quae, illum ab quos reiciendis dolorum sint nisi dolore
        magnam consequuntur natus laboriosam veniam quo aspernatur expedita rem!
        In ipsum odio alias! Nam, porro! Architecto, repudiandae, in qui,
        maiores vero molestias illum mollitia est repellat sint deleniti
        delectus ipsum sapiente omnis. Suscipit, tenetur asperiores aut
        aspernatur similique quae consequatur totam autem laboriosam! Dicta
        neque sed eos tempore vel qui totam amet nisi quibusdam itaque, natus
        praesentium aut aliquam nulla labore incidunt earum rem asperiores
        distinctio hic ea! Delectus quas molestias non modi? Numquam fuga
        explicabo aliquam illo voluptate veritatis facere adipisci nisi
        repudiandae necessitatibus sed quam neque laborum vero dicta, animi
        unde, esse minus enim beatae voluptas asperiores quae et possimus?
        Quasi! Ipsum eum eos corporis neque non libero magni vitae minus
        perferendis amet id corrupti illo saepe esse, a, aspernatur aut facere
        molestiae doloribus possimus quidem aperiam quos iure earum? Rem.
        Consequuntur est at ab quam, numquam id optio, iste, deleniti fugiat
        enim recusandae. Officia, quaerat saepe quos placeat cumque libero
        minima iure repellendus nemo, fugiat molestiae reprehenderit nam
        suscipit modi. Eaque delectus et iure ut, praesentium placeat blanditiis
        ipsum facere officia minus provident vitae repellat veniam neque odit
        amet id totam eveniet assumenda expedita quos. Omnis repellat quisquam
        debitis provident. Repudiandae atque minima cumque sequi quidem.
        Impedit, vitae. Voluptates recusandae modi minima unde molestias. Omnis,
        blanditiis molestias itaque qui rem nemo nostrum optio enim est aperiam
        accusamus repellat voluptatem tempora! Laudantium libero atque ipsum,
        dolor totam quae magnam officiis nulla quaerat, nobis rerum. Ipsum earum
        iste, natus repellendus mollitia ab animi error non veniam aut quis
        voluptate cumque ullam quam! Odio asperiores dicta modi, officiis maxime
        repellat quibusdam natus. Consectetur, inventore a doloremque excepturi,
        tempore atque, necessitatibus velit deleniti illum harum ducimus commodi
        debitis? Laborum itaque fugit sunt sequi voluptatem. Corrupti ut
        incidunt adipisci hic. Repudiandae repellat reprehenderit exercitationem
        voluptatibus cupiditate commodi incidunt, pariatur similique temporibus
        quia doloremque harum quibusdam totam, consequuntur porro provident illo
        modi, voluptatum ipsum fugiat praesentium! Exercitationem, asperiores!
        Quod eum dicta corporis doloribus exercitationem earum voluptatum iure
        consectetur nulla asperiores qui facere a aperiam, quisquam dolore!
        Illum autem ullam laborum dolores eum inventore obcaecati molestias
        ipsam? Eligendi animi excepturi voluptatum dolore, fugiat quos totam
        dolorem consequatur in quia laborum dolores debitis eveniet provident,
        quae facilis corporis ea. Officia architecto quidem aspernatur officiis,
        eius ab pariatur eligendi. Doloremque rerum distinctio nulla quasi
        aliquam maxime eligendi! Nulla ducimus asperiores, ratione accusantium
        praesentium excepturi corrupti deserunt molestiae recusandae dignissimos
        doloremque in, possimus porro atque! Ea, necessitatibus magnam? Sunt,
        iure? Laborum delectus tempore repellat praesentium. Cupiditate nihil
        repellat alias velit ipsum quod rerum voluptates nemo doloribus iste
        eius modi eligendi sequi, debitis animi ipsa, magnam aliquam numquam
        ipsam, voluptatibus enim. Cupiditate exercitationem nostrum odio nihil
        nemo explicabo nam qui repudiandae alias debitis eligendi harum esse,
        ullam numquam omnis ex soluta ratione animi, recusandae sunt. Error
        ducimus delectus dolore repellendus asperiores. Sequi dicta neque
        voluptate architecto temporibus. Non culpa quia voluptates quidem atque
        vero vel, expedita illo quod autem, hic placeat perspiciatis commodi
        quibusdam eveniet nostrum! Maiores et debitis incidunt eligendi?
        Similique ab reiciendis quia nobis temporibus voluptates minima, totam
        ipsa nesciunt vero quasi, non neque minus iure labore. Sunt molestias
        laboriosam maiores nulla voluptate officia maxime animi earum, debitis
        doloribus? Illo laboriosam libero voluptas temporibus nam dolorem culpa
        in fugit ullam incidunt et ad, doloribus officiis quas velit est maiores
        consequuntur vero amet sequi! Minima eligendi iste culpa dolorem fugiat?
        Iure natus illo quos dignissimos nihil ea eligendi error aliquam,
        numquam consequatur inventore distinctio. Autem laboriosam eum libero
        corrupti distinctio. Maiores, officia asperiores dignissimos dicta vel
        ratione unde nemo quaerat.
      </p>
    </div>
  );
};

export default Content;
