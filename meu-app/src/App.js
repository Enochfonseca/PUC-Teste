import React from "react";
import "./App.css";
const Painel = () => {
  return(
    <div className="painel">
      0,75
    </div>
  )
}

const Button = (props) => {
  return(
    <div className={props.type}>
      { props.digito }
    </div>
  )
}

function App() {
  return (
    <div className="painel-buttons">
      <Painel/>
      <Button type="button-ac" digito="AC"/>
      <Button type="button-operacao" digito="/"/>
      <Button type="button-numero" digito="7"/>
      <Button type="button-numero" digito="8"/>
      <Button type="button-numero" digito="9"/>
      <Button type="button-operacao" digito="*"/>
      <Button type="button-numero" digito="4"/>
      <Button type="button-numero" digito="5"/>
      <Button type="button-numero" digito="6"/>
      <Button type="button-operacao" digito="-"/>
      <Button type="button-numero" digito="1"/>
      <Button type="button-numero" digito="2"/>
      <Button type="button-numero" digito="3"/>
      <Button type="button-operacao" digito="+"/>
      
      
    </div>
  );
}

export default App;
