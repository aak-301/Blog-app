import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

function Single() {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2F"
            alt=""
            srcset=""
          />
          <div className="info">
            <span>Aakash</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link className="link" to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
          </div>
          <div className="edit">
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus
          excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem
          ratione sit debitis deserunt repellendus numquam ab vel perspiciatis
          corporis! jdhvjn kkdbkbd dkhbjdbjd dkbdbkb kbdkbnkwnknd j dkbjbd
          dkbkdbkbke dkbdbkbdjv djvdvjbvjdbj djbj j jdjj j djbdbj j djvjd j judj
          jhd jd h jd jvj djbjdbjd jj jdb d jd jvdj j duj jd j dujd j djvj j dj
          jvdu je j dj vjd j j djvjddm bj dj md jh dj hjh je j dj u hdj je
          hd,dkbjdbjk hd jdh jdhbjkdjkjh dj jd j j jhjhkddjkjd Lorem, ipsum
          dolor sit. amet consectetur adipisicing elit. A possimus excepturi
          aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit
          debitis deserunt repellendus numquam ab vel perspiciatis corporis!
          jdhvjn kkdbkbd dkhbjdbjd dkbdbkb kbdkbnkwnknd j dkbjbd dkbkdbkbke
          dkbdbkbdjv djvdvjbvjdbj djbj j jdjj j djbdbj j djvjd j judj jhd jd h
          jd jvj djbjdbjd jj jdb d jd jvdj j duj jd j dujd j djvj j dj jvdu je j
          dj vjd j j djvjddm bj dj md jh dj hjh je j dj u hdj je hd,dkbjdbjk hd
          jdh jdhbjkdjkjh dj jd j j jhjhkddjkjd Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. A possimus excepturi aliquid nihil
          cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis
          deserunt repellendus numquam ab vel perspiciatis corporis! jdhvjn
          kkdbkbd dkhbjdbjd dkbdbkb kbdkbnkwnknd j dkbjbd dkbkdbkbke dkbdbkbdjv
          djvdvjbvjdbj djbj j jdjj j djbdbj j djvjd j judj jhd jd h jd jvj
          djbjdbjd jj jdb d jd jvdj j duj jd j dujd j djvj j dj jvdu je j dj vjd
          j j djvjddm bj dj md jh dj hjh je j dj u hdj je hd,dkbjdbjk hd jdh
          jdhbjkdjkjh dj jd j j jhjhkddjkjd
        </p>
      </div>
      <Menu />
    </div>
  );
}

export default Single;
