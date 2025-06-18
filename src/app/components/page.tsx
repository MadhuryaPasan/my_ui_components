import React from "react";
import Ui_components_template from "@/components/Ui_components_template";
import {Btn_list} from "@/components/components_library/Buttons/Btn_list";

const components = () => {
  return (
    <>
      <div>components</div>

      {Btn_list.map((data: any) => (
        <Ui_components_template key={data.id} {...data} />
      ))}
    </>
  );
};

export default components;
