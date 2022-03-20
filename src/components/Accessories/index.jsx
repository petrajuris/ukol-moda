import React from "react";
import Product from "../Product";
import "./style.css";

const Accessories = () => (
  <section className="accessories">
    <h2>Doplňky</h2>
    <div className="products">
      <Product
        image={"blue-handbag.jpg"}
        name={"Modrá kabelka"}
        description={
          "Efektní kožená kabelka v krásné modré barvě poskytne dostatek prostoru pro váš mobil, peněženku a další nezbytnosti."
        }
        price={3590}
      />
	   <Product
        image={"grey-scarf.jpg"}
        name={"Šedá vlněná šála"}
        description={
          "Stylová unisexová šála vyrobená ze 100% extra jemné merino vlny. Moderní, jednoduché a věčné."
        }
        price={970}
      />
	   <Product
        image={"glasses.jpg"}
        name={"Brýle"}
        description={
          "Holky nezlobte se, já už fakt nevím, co bych si tady měl vymyslet za text. Šaty, boty a kabelky mě zcela vyčerpaly."
        }
        price={1620}
      />
    </div>
  </section>
);

export default Accessories;
