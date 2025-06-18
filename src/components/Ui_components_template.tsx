import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {BtnType} from "@/components/components_library/Buttons/Btn_list";

const Ui_components_template = (data: BtnType) => {
  return (
    <>
      <Card className=" border-none ">
        <CardContent className="w-100 ">
          <Tabs defaultValue="preview">
            <TabsList className="w-full bg-white">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview">
              <Card className=" shadow-none bg-gray-100 min-h-40 ">
                <div className="flex justify-center items-center w-full min-h-40">
                  <data.preview />
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="code">
              <Card className=" border-none shadow-none">{data.code}</Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </>
  );
};

export default Ui_components_template;
