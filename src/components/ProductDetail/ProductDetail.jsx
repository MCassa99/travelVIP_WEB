import styled from "styled-components";
import StarRating from "../Item/StarRating";

const ProductDetail = ({ destino, children }) => {
  const { id, title, stay, rating, price, img, desc, disp, cat } = destino;

  let botonWpp = () => {
    let mensaje = `Hola TravelVIP ! Me contacto porque queria averiguar por una cotizacion a ${title}  por la cantidad de ${stay} dias. Muchas Gracias!`;
    let telefono = "+59896327431";
    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=${mensaje}&source=&data=`;
    window.open(url, "_blank", "noreferrer");
  }

  return (
    <>
      <Section id="hero">
        <div className="background">
          <img src={img} alt="" />
        </div>
        <div className="content">
          <div className="title">
            <h1 className="mb-3">{title}</h1>
            <span className="stay mt-5">
              {stay} Dias / {stay - 1} Noches
            </span>
            <p> {desc} </p>
            <p> <StarRating rating={rating} /> </p>
            <p> Desde ${price} </p>
          </div>
          <div>
            <button className="btn btn-lg btn-primary" onClick={botonWpp}>Contactarme</button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ProductDetail;

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100;

  .background {
    height: 100;
    img {
      width: 100%;
      filter: brightness(40%);
    }
  }
  .content {
    height: 70%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .title {
      color: white;
      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }
    .search {
      display: flex;
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: #03045e;
        }
        input {
          background-color: transparent;
          border: none;
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 3rem;
          }

          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
      }
      button {
        padding: 1rem;
        cursor: pointer;
        border-radius: 0.3rem;
        border: none;
        color: white;
        background-color: #4361ee;
        font-size: 1.1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #023e8a;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 25rem;
    .background {
      background-color: palegreen;
      img {
        height: 100%;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
          padding: 1vw;
        }
      }
      .search {
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;
        /* padding: 0; */
        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 1rem;
          font-size: 1rem;
        }
        /* display: none; */
      }
    }
  }
`;
