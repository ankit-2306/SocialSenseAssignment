import React, { useState } from "react";
import Switch from "@mui/material/Switch";

const SwitchComp = ({ txt, chek, per }: any) => {
  const [value, setValue] = useState(chek);
  const [sty, setSty] = useState("");

  function handleChange(e: any) {
    const val = value;
    const res = val ? false : true;
    setValue(res);
    const styling = val ? "text-slate-500" : "text-slate-900";
    setSty(styling);
  }

  return (
    <div className="switchclass h-10 mt-2">
      <Switch className="h-9 " defaultChecked onChange={handleChange} />
        <span className={sty}>{txt}</span>
        { !(per==200) &&

          <div className={sty+'mt-2 switchtext'}>{per}%</div>
        }
      
    </div>
  );
};

export default SwitchComp;
