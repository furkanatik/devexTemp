import './App.css';
import 'devextreme/dist/css/dx.light.css';
import DataGrid, {
  Column,
  Paging,
  Lookup,
  Popup,
  Form,
  Editing,
} from "devextreme-react/data-grid";
import { Item as FormItem } from "devextreme-react/form";
import { employees, states } from "./data";
import { TextBox } from "devextreme-react";

function App() {
  return (
    <DataGrid dataSource={employees} keyExpr="ID" showBorders={true}>
    <Paging enabled={false} />
    <Editing
      mode="popup"
      allowUpdating={true}
      allowAdding={true}
      allowDeleting={true}
    >
      <Popup
        title="Employee Info"
        showTitle={true}
        width={700}
        height={525}
      />
      <Form>
        <FormItem
          itemType="group"
          caption="Home Address"
          colCount={2}
          colSpan={2}
        >
          <FormItem dataField="Position" />
          <FormItem dataField="FirstName" />
          <FormItem dataField="HireDate" />
          <FormItem dataField="LastName" />
          <FormItem dataField="StateID" />
          <FormItem dataField="Address" />
        </FormItem>
      </Form>
    </Editing>
    <Column
      dataField="Position"
      editCellRender={EditCellRender}
      width={170}
    />
    <Column dataField="FirstName" setCellValue={() => {}} />
    <Column dataField="Prefix" caption="Title" width={70} />
    <Column dataField="LastName" />
    <Column dataField="BirthDate" dataType="date" />
    <Column dataField="HireDate" dataType="date" />
    <Column dataField="StateID" caption="State" width={125}>
      <Lookup dataSource={states} valueExpr="ID" displayExpr="Name" />
    </Column>
    <Column dataField="Address" visible={false} />
    <Column dataField="Notes" visible={false} />
  </DataGrid>
  );
}

export default App;

const EditCellRender = () => {
  return (
    <TextBox
      value={"12"}
      label={"my label"}
      buttons={[
        {
          name: "clearIcon",
          location: "after",
          options: {
            useSubmitBehavior: false,
            focusStateEnabled: false,
            visible: true,
            stylingMode: "text",
            icon: "clear",
            type: "danger",
            onClick: () => {
              console.log("first");
            },
          },
        },
      ]}
    ></TextBox>
  );
};