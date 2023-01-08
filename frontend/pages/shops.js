import Shop from '../components/Shop'
import { useState } from 'react'
import { loadShops } from '../lib/load-shops'

/* fetching the shops data and populating the shops and Tier components */

export const getStaticProps = async () => {
  const shops = await loadShops()
  return {
    props: {
      shops,
    },
  }
}
const shops = ({ shops }) => {
  const [search, setSearch] = useState('')
  /* SEARCH through shop components*/
  const searchResult = shops.filter((shop) => {
    return shop.shop_name.toLowerCase().includes(search.toLowerCase())
  })
  // console.log('test', shops)
  return (
    <>
      <style jsx>{`
        .form {
          position: relative;
        }

        .form span {
          position: absolute;
          right: 17px;
          top: 13px;
          padding: 2px;
          border-left: 1px solid #d1d5db;
        }

        .left-pan {
          padding-left: 7px;
        }

        .left-pan i {
          padding-left: 10px;
        }

        .form-input {
          height: 55px;
          // text-indent: 33px;
          border-radius: 10px;
        }

        .form-input:focus {
          box-shadow: none;
          border: none;
        }
      `}</style>
      <div className='row height d-flex justify-content-center align-items-center pt-5 mb-5'>
        <div className='col-md-6'>
          <div className='form'>
            <input
              type='text'
              className='form-control form-input'
              placeholder='Search shops...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className='left-pan'>
              <i className='fa fa-search'></i>
            </span>
          </div>
        </div>
      </div>
      <div>
        {searchResult.map((shop) => {
          return <Shop shop={shop} key={shop.id} />
        })}
      </div>
    </>
  )
}

export default shops
