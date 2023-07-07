import { useEffect, useState } from "react";
import { SearchAPI } from "../routes/Search";
import { BookSection, BookTodayWrapper, TitleEach } from "../styles/BookStyles";
import { BorderBottomG } from "../styles/Common";
import { faPlay, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BookToday() {
  return (
    <>
      <BookSection className="container mt-4">
        <TitleEach>
          <h2>Book of Today</h2>
          <h1>
            <span className="plus-text">+</span>
          </h1>
        </TitleEach>
      </BookSection>
      <BorderBottomG className="container" />
      {/* <BookTodayWrapper className="container"> */}
      <BookTodayWrapper className="container">
        <div className="book-today">
          <img src="https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F680131%3Ftimestamp%3D20190124082314" />
          <div className="book-today-title-author">
            <h1>The Old Man and the Sea</h1>
            <h3>Ernest Hemingway</h3>
            <h6>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </h6>
          </div>
        </div>
        <div className="detail-review">
          <div className="detail">
            <div className="detail-icon me-2">
              <FontAwesomeIcon icon={faPlay} />
            </div>
            This book is in English. 『The Old Man and the Sea』 is a textbook
            that can be trained to read English literature texts meticulously
            and accurately. Students from foreign language high schools, special
            purpose high schools, and students who have completed elementary{" "}
            school leaders can also use the service.
          </div>
          <div className="review">
            <div>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfEAAABlCAMAAABqbCquAAAAh1BMVEUAAAD///+urq6goKBlZWWWlpbs7Ozj4+Py8vKDg4Pp6en4+Pjm5ubg4OCzs7OGhoa6urrR0dFycnIcHByoqKhXV1c/Pz85OTnLy8ssLCwPDw/a2trU1NQWFhZSUlJdXV2ZmZl4eHhHR0eOjo4yMjIkJCR8fHzDw8MoKCg8PDxqampMTExzc3NMtvDQAAAQ30lEQVR4nO1da2OquhIl4oOKKCoqFesLlV3q//99lzwmmQRQQdvdfW7Wh7NLhDxmTWYmk8BxHAsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwuL/wx2vdnqb/fhX0Y3nZ3+dh+aYRdNiR9pRfPdX+rL38Vp2+apPEqIt39xV16HWTby+sn4qpeefeJ/opvIuF3t6+32o/7XabtKfwwp2d+958Dk15nppSdCvPdv6dOzWPQJIEnP6Ic9Ib68iAnptKl9m9CKN6aLCMW/F/JpPtEah3EW9kDGRyH/j/gZ63ouet+7c0/Xk/LbpFi3OwXlT7T9bbgQDYGUmRMWly7/c0Z/asN4D+rNteIp8ZiP2BLyKl+RioZEL3NukXZFSSuzrOq8w3iqyw9NmmKSkFT8vTu07sSrsSAl9DuzdfHLG1MAdlOMZdkESJ2OqHjMmsmyoPjn6yXDcDLZEDcfnPGIlbDpPm9c5Z+A3Gc8L8tv2GHqzZRdOK3L6zT7aXjlHlP4wtRTsw6DasE4rlGVatPiNcNwUY0LWtAtGF8HoqQgrTtsWmWqHr4B/7b8eKtM8X7J2qdCRTV4YkK2Y7yHq5KPa22Gt55/GHOycadQZUxLCsZnqpXxZdO0Shnd3GT87Y78BvQmbiL9dbuxvRjjOz0upLeEmdKc8YQknaGsS4RQR62B14jBpSzDPGfhUrczjsNnFOsCs/cm4xm5DdruSPzdbzW0V4NNjCTe1Bh3cqE3eW0ZZwu6DtTFp9kfD7e1eM0wEmYyRZ3Mf+zIFTXdxot+PMJ4IORXY9xZwCot3aTFyF6ODSwa54ewotdcLd3WjLP/xlBbt7hYe0tVMLjh2w7dBg3xcHyAGO+y3vZw002RPcb4kMWE50tWIT8e+ArFu7Tow+sR4mD56AZGj/lK7a0t49yWHqA2am4nNHDejoM+GWX1NKxD4jUP4qeYcb46g1nehvHoAcYz6awKfLkDXXy+WJ4zFW+/SHwptipY5jKajUeyw4lY0bRmnGMijSsWXnDjiW673EUF4+Db2zDuPsB4ruSXU/msr2MVuExlkJKQfvPV4TchJEv2b+r7Ugm7bux5yVheP8t4LwIZoNJB/QM0bbJv0RBmfPczjBfTl1PZI57MOORMfh0tA9Gi/e9Cxy/M0swnmbjmyaEUj/NZxl25Lkch8w3GqUN0WzT0Nxh3Qu/MAnvglO9OuL/DaVfj6536GS7htSsyJfs9uuN5xidAudL7esbZzW2WMrAip3//GOPOYk4b5unUeURG7I/oV8TldTh7gs1lKEV9g/Ha+PpYU14w7oBzU967gnERq/EYOdN/09xgzZZUI8bvB1Im4wvjX8DJF07omMkRmoyf6i/x5lWts59XDHkObUTl326Cdjgp/u1uCHmA8X1NNuPi1SVMKeMyfS93FEqMbxMRzgrihliDAg8JY1OTjG/A+NU3TdbVF+316M3zrMR4JOxgx9DFJeHp81mCdFpnfJ4QbcM4U7buy0Mj25GaXLDLGNIRASOThpnqNfWaa6c3EGnFO4xTtajIWHaH5WkJuFBJwRpcptcNxleULh6gyzyW0t2idl9qOV0CGXv5HA8zfmSr0BGeabRR1gLd/PESapx1ximxfmeyH8r9MI4zb3EP8qtg/EAIpnJBJS5mNm3Dh37QNY1XMc1T+sBbRRnpp7vuGG9ZPAIqvywa9mD5eZPxLc8yDI3c6CKos52naOMxmZ2BRgjJNMbnGVKqA9zKM+TFrzxLxxcVHx5UUzJmDzK+lioladmxcflztjCEnuiMq0XrH61RSnTYGU2csI5x3pw8+sHXqky550JubMavuMr45n7+ReQoscxnWo701kK3DMZzkMueCMZ7e3SPZFzuUNHDMdK/rTaBSDeVlC1UMpMrNKHdmPGxD6kfNnaVB2IR7wmuqANdQWYrCwytV3aE/r0DH1Ri3CVqM2GKu0lp+EJtaYzvzWeg67Ro01WVCMZl50CFqMUqrMMS+p/gveQdbqCQQSSde7cPeqzaXRSzFG9SNVr6naSIdMbHuBbB+Hij8tQk3wgtPhcqvD+IUsPFT7HMYKhi4irGXTp8gluXSQzqPyC/TagCzOXfI32qOau0A9td9HLLdsV30KhkvHDg5P1TTZFC1ouR3L6VE3no6Iy/q05oc/BLyU9jPAMD5CaS8t4wdy6DLVxmcaj2YS6Jq5K0+QbWdttC+b9AH0UI9MmkulMa0mxzgk0LvqDAjIeaUxaMe0vnXYmK21iu466TVDUO26KccanR/B5gPOViAvPBjT5Intm+Kzzod1Uthjk54vwwLdh1oiAOxsYc57ct1aymv+RrlvNhAJ2mMSRmPJB7AfphFjZuHlVhxjM58c6OXJpSX3hGe4c73I2zs5bq5gtl5tx2ZTaDFYpe5eqUQaOFLPeufNYhxnlgI8NLwThTW7AxXEuEpFw5B7TkKKiwsP+QdOZBjGDcBzHBBP1ExYLXHF9cKxrCW+FE+fF3048Lz7LET1xxE0TI8YJkS3ufbgpLwPqghypLdkeIR1sMhXOnousQyc+Rdt5DPcL76NIK7qHrV1wubir88InuffmdpDKKrQMfFFdH4d36yozCGkhbnYk+jvAvrnJDeM0DE18wLu0Z8wec8bkUE3hQrWIxk5GIjAuOP0QDLVpURW58/cnN04ewCuIEZB8e/eNm0Qk/22OOpSj6SvemcDuISsm49ADLKvkZIxD+eICqA8ZD2XXRb7b3qhjn6JbXbbcQoK5IxmGosJGi9/gdEyNsLDXF4HtRggY6CjGedFv0wmRcHs5IkVQqGP/AFwLGuQ5aVMn4FDMhVFcw7qlHAYrxKVBioi+Hj+c4EAfR9QTLrzABeARiDcOrF3OixLiMXpwS48eGSzPcFcW4c6B/qMWPxviKX5QYF+4JB9B05MV8foMFmew4ZaPEuLDkHdyzBxk3NimZ8O4y3nmYcWZV9xXi+1DDx4xz16AeuMW4mEBcGiJPVWJc+BqPRhc640tzoXwHK0WAxjhVNnTc+CHGmQSnWvtH7uImcldEru5OVYxT/yZ3xRsxLlayGuPRIQgGKSxinmKc/1txsF7MScOq86GgUzfPM850mj+vMb4lvn4s/B52uAXMuNOr3TurZbwQmrlhlDFhKMblCm1TxXhxu4oCGjFeMJl8KsdCi46sU3t9ddaK8TTEgtFw4L+YkZuD1+POSxh/l3NBML6nf19wtQ8hx+xpjNfn1WsZj6ZlAxPTfAtiXC608grGryO0u9GI8ZRThdfjXy+z6iloTXnDQgiGx07fyngs8yMQ0IdyBIMGhy1gGYob4B0RjL9/ooHdZPw4Ss3aKbZLjXGZTvPKjE+19E0jxgvbQUf9TYzLXaDS5uAVNQiMi91SzviKRf1PM37oKx+hDgnCUqiiY7WA/GWuGvA5cYLxmHX8AcY7yblUOwAzLtMPKZ8LgvFEGxRFM8bfh/5KZ/z4wsgN8iQluw7rTWabxKl0nooUjCdMss8xvtPngsxWxyrRarzjeAviiQwa8GGicsZXXBfuMh4OKie4AGZcrdD0OR6bW7DNGC+C1vP3MS7DD9NlwuKDdZ4y7skta8b4luvCc4xHQz2L+ib7/QX9asA4JPbmrAFPOR/OeMCTyHcZD268LmwwvgbGeeZNyMwvnU9oyjjFtzEuU+NmNz3UYkz6KnLljA95fc8xXjqOcPThyDSMuAHjkEYu2uiMcKTNGO8JCTwYq9dBY1wm5zTGy3mjZxlfvpJxtLmmA8pDZx0OsNwZ45Ho/7NWvTxQ2EebNmZcutVsoO8QUMa30PaTjL/ttUvvH2Rc2nVjY1LuwISBvi6mjOcwP18Qq2vYx/DXpjHjKltlVrpn2sCn/V3Gb23Qdt+yWFPTvILxUemxZxn/fC3j0q4bMw6aNHOdBeML2exzjJfo7Kmd8haMy/c8DU/aS7tKAHcZR5TP+zg3lcMKIkYLiKTMOJ7kMYsCn2V8dYNxvlEiGBebI3cYlxGnQa18t9RfauXRYaY6+RzjKHG9o6uFHB15acG4oxZ1WiDq9tVgH2CcBCL70tU0R77gK5QiYvHGJ2Jc7tP5IqV09nijohhvq/B3AV7AeJ+x02iOK7tuBFLqMJSWoOGnMwRXDzNeuZOimtzTeG3t5VnRWS+kg2jDuDx/ViA78EX1Kg00qWpvGq5wF9HZG8Z0pCX2+wRj4LgZGgpn/FP9zsjNQWOgdIMvqPA542HVBgJm/KQzzo3xAFfEGYdwVRCKcxmhutdBdl33qys0wnDGI+hlOkAyqmOcn5cTKRFuOg78QpyCVCdk+FGFjVxEc4wl481eaTO+GeB5pWMusmWmSoIjZlo6HWUiKGOBNgHQ69scMuCQwzpM0UZnMaDOEN/CkaOL4ZIxHlQnmYBxqg0n/U1DOpT1VO2xJWv2E/RX0slUg+u9HNpWF0NBzgmdWzS+o+N56vSSOH0rX88QwZ00C0vUZ3ruRfaCSuHEz7zKbq38N0MwxWxgjMdNX2mbkBrw6P0rUKTkq+AswnsaPWQX7XMcma/tpJyM6pCvTsWo0rF2fGWUAAML1GgxdVAlHYf4dW/4VMxxXJScVcKqmKouGYHijENljq47lt7vJkphv3ZoN7cY5z7Ab2mgA2c6hDHIZF6U5MvBHJ3b9LFTGKF0GvEOQ+rlkFcMxXF6TcHcomqvxavxhpYChBPaYZ2IZXQhY7Wt1ERff1ulZ9SHD9976HKuRAArxLdY61UHf4nBr38DA2g7FKHZnHUQ9FEe2tupijyZJ1x3cTzD7+1iZRYfE4JLI8FofO0JIJzr7IhuoHW/Qzfp0fQTWNShXpNQfSV5mC74gzfFU3ffkarGV9UXIrDqiEnG9mKvpVELHTa/xWcYdS3I7WoKIEbhSY1hZgrO+dJzADs5B+P6j+JF/vjS3e5m6TgZBuE03x3kHEFJfziYkxmRAGwkoXGnqgMM4uB5KcG4Q+ZXDhf71iuSn+zCAF+I+BsELfOq4hC7CgupRQmiSMyS+Gay8xaQtRPyMMakyoQY8HtATBNLWRimCP5h/rFgktKZ2mhTntmJ8tcbmTCEMeG2s19vwq4qTChwnnWU0x5qhxmY7emXT/z2UGuyTr2IdrPSpaBj3RxGRI/kRzHGw9UuFqWHmXtT6Z2Z2BrfepWDeBxrF8/zsHTeYykVlDtYfVl66ldkhtiNZxiHEWudjI2ouDJv5yJtP09L5hTjreKVreOkk8VZZGrJ0au2hTnxTBHu1ATnd8RONT4iPM/Hpe9EHvVTsClmdYLn17KUZCu6hY/myxVkv51BR1im4WYwSDK3ch6twAjyqWPuIlXYWuqIQUDL0tkcI/XqLM0bGPRk3Y0jXaeqAwu1qPEMFSsAo+jWpDoK+e0rb1rpnT/WXpxKhlrfh85f9bWkRyGSZI8sCPxXfa3tAYRVp38+u5P07Zd8fuV1WPzwx4u5x98/cmvLr7m0gq87mvMsmko3Nf4dn877R8FfwqjzZgYKyjc/JG0WoFEH+L59i6Zm7Pyfm+c/h0VVIHoD+xFJfuT7GGasbOAf+/8Z/Bps2YIraPZNldOf+/c8jzuMP2iULHRMvFESpr9zusR3KP/b/bN4Nb7uMP5rvp9n8SqUsoYcEMP97e5ZvB4m5cOs16W5C5YVbvw5fYt/AMdYkb1HyTq6K/Z0QtLid+I4m+Vbc20Q2yn+fwafjGzS7f8Ip8S/9YaUxX8OR5thtbCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLD4hfgfz8Lm/fM0Ll0AAAAASUVORK5CYII=" />
            </div>
            ” Good as “The Old Man and the Sea” is, it is good only in a limited
            way. The fisherman is not a well-characterized individual. He is a
            symbol of an attitude toward life. He often thinks and talks
            poetically and symbolically and so artificially.” [Orville Prescott,
            The New York Times]
          </div>
        </div>
      </BookTodayWrapper>
    </>
  );
}
export default BookToday;
