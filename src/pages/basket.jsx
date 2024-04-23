import { useState } from 'react';

function Basket() {
  // Input alanına girilen değeri tutan state
  const [text, setText] = useState("PC");
  // Sepetteki ürünleri tutan state
  const [message, setMessage] = useState([]);

  // Input alanında değişiklik olduğunda çağrılan fonksiyon
  const onChangeFunc = (e) => {
    setText(e.target.value)
  }
 // Ekleme işlemi gerçekleştirildiğinde çağrılan fonksiyon
  const messageFunc = () => {
    // Önceki ürün listesine yeni ürünü ekler
    setMessage(prev => [...prev, text])
    // Input alanını temizler
    setText('');
  }
  // Ürünü sepetten kaldırma işlemi gerçekleştirildiğinde çağrılan fonksiyon
  const delItem = (index) => {
    // Seçilen index'e sahip ürünü filtreler ve yeni listeyi günceller
    setMessage(prev => prev.filter((_, i) => i !== index));
  }

  return (
    <>
    <input type="text" value={text} onChange={onChangeFunc} placeholder='add'/>
    <button onClick={messageFunc}>Add</button>

  {
    message?.map((msg,i)=> (
      <div key={i}>{msg}
          <button onClick={() => delItem(i)}>X</button>
      </div>
    ))

  }
    
    </>
  )
}
export default Basket;