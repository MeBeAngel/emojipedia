import React from "react";

function Entry (props) {
  return (
<div className="term">
<dt>
  <span className="emoji" role="img" aria-label="Tense Biceps">
    {props.emoji}
  </span>
  <span>{props.name}</span>
</dt>
<dd>
{props.meaning}
</dd>
</div>
  )
}


function createEntry(entryInfo) {
   return <Entry
    key = {entryInfo.id}
    emoji = {entryInfo.emoji}
    name = {entryInfo.name}
    meaning = {entryInfo.meaning} />
} 





export default Entry;
export { createEntry };