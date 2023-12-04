import { useSearchParams } from 'react-router-dom';
import CustomButton from '../CustomButton';

const ShowMore = () => {
  const [params, setParams] = useSearchParams();

  // 1) URL'de limit paramtresi yoksa:
  // * kullanıcı projeye yeni girmiştir ve ekranda 5 araba vardır
  // * butona basınca url'e limit paramtresi eklenicek ve değeri 10 olucak

  // 2) URL'de limit paramtresi varsa:
  // * kullanıcı bir kaç kez  butona basmıştır
  // * butona basınca url'deki paramtreyi alıcaz ve 5 ekliyecez

  // url'den limiti al yoksa 5 olarak belirle
  const limit = Number(params.get('limit')) || 5;

  
  const handleLimit = () => {
    // yeni limiti belirle
    const newLimit = String(limit + 4);
    // param değişkenini günceller
    params.set('limit', newLimit);
    // url'i güncelle
    setParams(params);
  };

  

  return (
    <div className="w-full flex-center gap-5 my-10">
      {limit < 30 && (
        <CustomButton designs='bg-orange-600 hover:bg-orange-700' 
        handleClick={handleLimit} 
        title="Click For More" />
      )}
    </div>
  );
};

export default ShowMore;