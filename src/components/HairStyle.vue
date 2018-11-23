<template>
  <div>
    <b-container fluid>
      <b-row class="section-img">
        <h1 class="page-title">作品專區 Hair</h1>
      </b-row>
    </b-container fluid>
    <b-container class="container-body" fluid>
      <b-row>
        <b-col lg="12">
          <ul class="hair-style-list">
            <li v-for="item in stylelist" :class="{active:HairActive}" @click.prevent="selectStyle =item.style">
              <a href="#">
                {{item.style}}
              </a>
            </li>
          </ul>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="2" class="designer-list">
          <h3>設計師</h3>
          <ul>
            <li v-for="item in designer" :class="{active : DesignerActive}" @click.prevent="selectStyle =item.designer">
              <a href="#">{{item.designer}}</a></li>
          </ul>
        </b-col>
        <b-col lg="10">
          <b-row>
            <b-col v-for="item in filterList" xl="3" lg="4" md="6" sm="6" cols="12">
              <div class="hair-style-sec">
                <div class="fz-tw">
                  <img :src="item.imgurl" alt="">
                  <span>{{item.designer}}</span>
                  <p>{{item.style}}</p>
                </div>
              </div>
            </b-col>
          </b-row>
          <div class="pagination-nav">
            <b-pagination-nav base-url="#" :number-of-pages="15" v-model="currentPage" />
          </div>
        </b-col>

      </b-row>

    </b-container fluid>
  </div>
</template>

<script>
export default {
  name: 'HairStyle',
  props: {},
  data() {
    return {
      currentPage: 0,
      selectDesigner: 'All',
      selectStyle: 'All',
      desActive: false,
      hairActive: false,
      stylelist: [
        { style: 'All' },
        { style: '長髮' },
        { style: '短髮' },
        { style: '直髮' },
        { style: '捲髮' },
        { style: '男士髮' }
      ],
      designer: [
        { designer: 'all' },
        { designer: 'lily' },
        { designer: 'raven' },
        { designer: 'erica' },
        { designer: 'kevin' },
        { designer: '邦晉' }
      ],
      DesigneStyle: [
        {
          id: '1',
          imgurl:
            'data:image/jpeg;base64,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',
          designer: 'lily',
          style: '長髮'
        },
        {
          id: '2',
          imgurl:
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTExIVFRUXFhUXGBgWFRUYFRgYFxcWFxUXFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0dHR0rLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLSstLf/AABEIALsBDgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgEAB//EAD0QAAIBAwIEBAQEBAQGAwEAAAECAwAEERIhBTFBURMiYXEGgZGhFDKxwSNCUtFicrLwBzOCkqLhQ1PxFv/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACARAQEBAQADAQEBAAMAAAAAAAABEQIDITESQVETInH/2gAMAwEAAhEDEQA/AMhmrGxgBXJ/WqWWbPKruygIAX2J964c9Npdqyi5Vx3FSG1LXkwRdXy+ZpY0V162XNCjfG1GitWbc8zvivPBpOKaXRJiovJUSKWv5NK46n9KIW4rZ3yxNQrlerWMbdWvDJPLjtToNUtnLpYetXINZ9T205vpPNDam7W0Z/QdzVtBAqch8+tZ3qRtzxapobCQ74wPXanV4eQN2+21WGc9f94yK57ctsfPlWV8lazxT+q17Fu4oEsRXmKuT/v5bH77V1fX/f8AvNOeQXxf4zrGuCrq54arbr5T/wCJ/tVQ8ekkHmK157lY9cWPLUq8BXaKIhK+ATVG7ZOaseJzY8o+dVea04jLyX+O4qy4VLzTvvVbmiRPggiqsZy5V8jV1xnagW0gYZ+tGJrNv9CJ+tWHDpcrjO4pMw9enWgxlg4UbHpRg+NBHnG9QkbFdXPvU5U71C1LcjzEihrUL7Y4oMc5HPlV4jStjDqZfetED5iO1UfDfLIvpVyq6ic07S5gssgHM0KcrjvuKjJCACTz9TUI4QWyOXKlqhtlGpjuaBLICMikuLHS4Udt/nQUkOMUUt94YnYKMnlVJcyljk1YXI8pzULezDDfnVc5PqOtvpW12rB+HjoaSkQqcGr1nZUBV1wUmQ6e3X0qmrU/DcGmPV1Y/YbD96jyWTlfim9YukXAHbpXC3I9NvuPt/69a6N/99iDy9jRRFv9fTODlfv+grhtejIgq7dfntuOQ7ZPM+ldZvpjOcDOk/mPvRQpHP77Z2yxHfNeEbH+/l5nr8uVEMFh9eXPbIGw+n3qKjHXIx26Lv8AU/tTHhN68lzkj1Lb45moyR9ueflnYj5LTCAB2+Q/QfuaT4tba11qPMoz7jAOPvTvI/QfqAcjr1NdH+/7f6RVT0jqbGajbIzXJpgoyahcERMwPIMcftVXczlz+1dHM1yd9YHLJqJJqFer1bufXsV0CvV7VQBrecqcirWC4D+hqkFHgG+e1T1Fc2tLaR5Ug96nbqDhiNxtSVhkANvucAfqaaeQatt9X2NZN4ceZQQM16R8jnSxtl1AZ6UQRAZ7UlKbip3pIHNWF7ks22wP7VWHKnvVxl19Gh2cH1qzuJdLkcuVVJPWjTSFtyaWGemuNQ5g0uJ8YwdhQMVB3xRg1LiDZlz6D9KiKBM24buKNb75zVJn0WM59anyO1QHL50WRd6lT1I39ufz9DTjHFcYa1x3pylZqlFbfh0WlFHZR9f/ANrKLZMHAxkZH0zWxkbHLcnYCo83uL8E909bIdgB/Ye9WkdgOp+1JWkqoqgn69asoLtc7EVh+XXKkOHLn87D02/tRVsY+uT8z+1eNzXmuMe1PDwOSyj6Aj5mk7iwIHlb5N/ccqekvE70lNxOPlqpzlFuKyQsn5oz1AI3261HUrDIOR9x7irGOcOMgg1XcQtsnUh0v3H6HuKLyWsz8UxYcMOTD7jb+1UVa+9sWuQBsmgnWT+UHA5d81lLmEozKeYJH0ro8d9OTzc3d/gddxU4E1MBV5DGABtV3rGfPOs/im7KANkmrOeFWBFI2EZGe1L9bFfnKL+HQDlmoeFjpgc8UfT617JOc1MtVkWNkmUQ9BmgS3QLHt0xRYFPggCk7RTrHp+1LD/izSXVvivT3HtVb4hIO+N656nJpYrRjdEgjakmGDR9QNREdPCLxKXOFFFltiAevyppVEKgfzHnUor9SMH50yU+TgYBoWCedXM80enAIFVTY70JsTkXKeqn7VGN+tC1kV1RTI9j0pkjYUrbSkj1FGBb3NStwHflSralPpRZXI5qRXCcqW6AimVPcOTxTjIGMc+ueVWsAYFsjcAD7b/es7a3AVx1U7H29K1ab6R3FZ9zG3iyxVR2EjuTnn1q+sbLw1xuaLJGYxkKWPYczQRf3YbAtRo/qL7/AExR+rWn5kWdtKNxRLh/Kc0lZI2sMRjoRVjfwhlIB3NQuK0WwcZ5UvJw1h1JHpivTwzEaUm8M8s6c4+tTsuH3II1XOvvlV/tVS+k2R62tivKvXXKrmK0IGSRmqbirc6m0Z6DkOtdHQDesDfyapHYcizEe2Tj7V9BtYxodsfynPyFZBbcHBwK08dZeWWyRX8NHm5dKtulcKhRsOuK8r7VXV1jzMexUn5YAoTyY3z7USKTcE1KqUz2BzU15UWWM6yOm5zQxucVaVp4gWNM+leu54wCVxkjpSN9IMhfTeqxZsGlmnbiyjUsNhUkiYnYZFes7yNRzO9TbiiL+UZpH6JTqFYjkaGc96PxVeTjrVeAx61SbRLmcsck0C3bBNeNBGRvTiaZc1DNQDk15mI50ElINq9GdqiVz1o8Cbb0CPJLpNOJN1FIGuhsEe9LFS4Yubktsamq/wAIepqBgGc59xUnfYL6k0GXEeDWq4Rcao07q2D7Hl+lZwxksKtbGURnB2zj6il17i/HcrcW76l25jaiG3c9RVbYXGKsJbnC8653ZIi0WDjmakUwRmlOFz5fUTsD/anryRScg43o9h026sexohtsc2qpNwwY43x2pyK5yKZYncSYFUPEHyafvZ98VWT86UhdenuL3YitDv5nyoHXfmfpWXt5jjBo3Eo2Eh1gjqueWnoR6UHFbSZHP1dMhsqfeoMuamhGOeKgG3poLXp06frXYJg2AdqK0ils6cmu+XnpxTSnPKAMCoRNjlQGcdK74lBg3ROck1BEr07eYUYvTL7QTGKnpAGakMV0uMGg8iUEuUKNyO49DS7LivW7DcGiI2OmRTTmoxEEjPXY0oy7kdqbKbUtIu+aQrwrxqOa4zU0pxAZJNHjNQghNHVQDvSXz8LSc643T3ol5HjBHWgpvgVUib9H8TzV7DE7Ak1yBQSc1YWEUzMBEpOew2+ZpAAW7g+YYrpJYjGSdsVq7f4akbeVwPRdz9aes/hmKM58xPcn9KMplrU7Cp3chJC5qyv+GrGqMvUbr1HY0gyZHqKw75yuzx97EJbZtijYx9PnQpeEmYgyscDGAGIGe+1AuOMGLcxsw9BQ2+KYyBpjfPsdqJFWtDbRJGMDfPelpJgrYHWqmPijvuIyo7tt/wC6bt9RA1YoswaLK2TSzoSQBzO1NMQM0bgsIZy39P60uJtZ+S5FtdcDS5haHSgkIURykZMeCD74O+3rXzDiCGCZ4XxqjYqSDkHHUV9dReR32IOxxnG+KxP/ABZ4UVeO5SBY45FAYjGWkOW8yjrjr1xXV+XJOmTiuFY4zTgi7Vn4+9Hhu3XkaixcqyWI6j7CiyJsM9aRiviTgnHr0+fpVlJGXwqqSw2YAEkH1xQVLW0GtsdK9NpyQKZ4WuNftSkxoL+FZsZNEjTHOhTcwamJKBBdu1BkXG/Sva68z7UKrhNMFs+1LW8Wd6axQmFo59sdetEDUtdjTIT33qSSjvRYJQ5bc9Knb23U0TVXtdG0ZBxJg7jaiOoY+WoWdvrOOnWn7i0CjUmQRQpCOwYjcgU/Y/DbyjYFe7EbH271qfgngh0GeYEk/kU8gv8AVjuf2rXG3RhVc8/1NrI8K+DYI9yus93/ALcqvUsVQYCj6bVydGiPUrUop88jtVJIynBxRuHrrcLnGTzNK3v/ADB6k1Y8ITMqjRqAzt+9I0+JnVIwJB04Gw7is1fwGM7cq0hXJc6dPnbb7UtdQBhgip651fHd5rLSQ6l2pE5X+Xf0Aq5uYPC3zkUrPcLWPvn06uepSlvbs5BbPPYf+qtJQEXek478DpS91elzU3adsFefnWk4LaaEGeZ3PuayvCl8WYIP5fM312H6/St5GuBW3j5xy+TvfScYztVD/wASII24ejGR9ccgAXcgk7EMPRTsf71oVQ8xQOOxTvwy5RVRjofnnJA8zH/MByrVk+EjnTlnBH4RkkL/APM0KqlQTganJJB2GVHzpLO/pV8bMFljfyxW8YaVuuX/AIjKp/rJYKP8vpWXkuelw58N2MEjKTC2NyNcgYNp2PlCDYEge5rcwuF2UADlsMcuVJ/8PYwdcsqKqzAIiMcLHEpOnH6561UcX+IFEjpCRpUnVJzVRkgBR/MxxgUcTJtR1duRT3yvDNJqeJFLNpVs6ipYkN5FJHzpB5FPJgfbOPuAftRePfxo4roA4bVE5O51xnyliOpV1+lUytg0ubvtpfR4pqGKWYFdjTdvPtyrzLq5mqThMPU4oyx9KnHbDO52pnO2BQMTKaRUA/pRFkPI71wip1Uipup9Zz22FChjJNQUmrazgOB06mtLcZz3Q9J7VHTTIFckj+dRq8M8LYgn2qzs49bqh/mYD770hY2+BnvVrwpP40f+Yfej+m+pQYWMY2GPt0rkB2zUr5dKbdBQ7DeJT3Ga2ZUWUKRg4qveJQdsCiyDelriPeng0hxAbqexp/hONWTJowDyxvtvzpe7gyh+X6in+Fru5EfiDHptt69+VTYehWLZB82rdvN33O9FljoXDlyDtj07elO6dqRqLiNprUqeorDxXBDvFIMOhx/mHQ19OkizWT49wAPOkmdBOVzjYkbjOPnS652K56ysuzHNGJwua0D/AAvcfyoGHcMv7mlpvh2cAlkCgAnJZcbD0NZfmtdgnwDZ5Ekx5s5A9l2/vWyVaQ+HbHwraNepGo+7bn9asc4raTIw6vs3CABvQwInjlDFgTsVDMAc7Dbkc0APk4p62ZhHJpQEd87+u3XFUmvh9xwLw+ILbNnR4gOcc4/zZ/7QR8qtLexNzN4AwFDeNOc/nkbdIx30qQoH+Y1q/iPh3jOsiEJKgdASNsOMb+3T3rK8Tt2sYBGnnklJGsDfUevv2rHrne9vxc69YJx/ipY/hrcjYESOPyoo5jPQAcz05VmZsMNKYWJf5m21t1b1J6L0FOySRwxeGcs53kAONZ5gO3RB/T/MedVE8zOct8gBhQOyjoKU6vd9fDk/J614iqgRHJgJbWDzJYAF/TBVCB/hqEtkkTFZXLMOkY2PIglzsAQQds86Qq6VYpIVlkZgYsRMqAanG5jYsdlwNS5P9IpWfm6e6QM0eryqyD/Ewb7hRj70dhjnS813AchbZh/iMzE++nGKhb3GNm3HQ53HX6Y6VXsjiiiKmTRIo2IGF51KVGUZxtT04E64NQzS8s+ogA8zTDjScUhKWEagADn1NeXUOtekO9dNOiTBPE5D151PSR02oDV0OTgE0sC5SUEbGrv4Qh8W4GOSYY/tWUtrcnIFfR/+HvBzGjM2Q7b/AC6fpT5nsrfTZ3SakIpDhP8AyEB6ZH0Jp2MnGG+tL2owrDsx/v8AvWrMvNzoNydvlRJT5sUO6HkPzqiDxlT7GjfD6sTIBJoyvbPTYjfpS8D5B9qJwLw9RDxlspsQCeh1A4pUD8PQDbOfXv600Vpa2O+w09h2HSnWqVI6RSt/bBl/ynUPlTddIpwVCzeNlGlwaqfiQg+HCCNU0ir/ANA3kP8A2g/Wo+EEdkxtnIxtz36UnZYe9z/9MZJ57GTZeforVSV5LjlQWFSkbepIKkAjYE16KFjbTFJyvPbsQPN9dh8qPOvkOKU4WYTBJrjJYHc4OP8ADvy23pHVDb3I2z6fbGar/icmSJvC8rqCwI3OQN8E8jjO/rVzccIjbOksvfBpRuHCNDjJ1ZxnrsB+tF5/0o+UL3rtddcEjluaiTSaO07aT6Y51PJov/ISIV/360ktQMmW09OtTZsHwRF2otpKAAGQMvodLj0D7/cGoyDauQDanZolXPDLtR5QTjorDcezDZh9D6VYu2QR6Vl84OR0q5gvVK569feovNi5VQhAcE9D+9PynUcjlSNyozkUW1fy49arPTOfXpzht+VeG9Fvo+tBTlSXHS1MQWxbBpQmneHTOxWNebEAfM0FWt+F+GDJkYbLy9TW44IxKs3dvsAKqbe10BIV6DLHv3+pq94euFPbJ/QVrzMRaOCeYqEL+dh/UM/MbfpUsYORWQ+OviKaykjZRCsRR31S+J55E/8AhUpnSxXJBIIOCNqeaTR3wxg9jXH3U+1fPLn4nuJ5mnWZYIiImiinmtFjK7eMJQGMi53KsM+1bDgHGFngMnlAUuGKuHj8vMpIANS+uByp5YTnDJNyD0JFWHwzNJrwmnfWG1Z20scYx6kVg14hLDm6/ExsHDTvHNlEihllKWbK8SM2WXBKkHbBz3dtuKzQSzPJ+Hdbd4nljikuFkAuGAQxSPGqyZJ/Lt7ineSbkqVc6iCwJyRyydzj600rVmeM/EdtbSLEheaR3wkUeHmbnlsMRtsdyazkPG7yOZ5ZJliUzECC7mtYU8DR5dPmMiShtsYINTObVa+lYrmar+B8WW6t1njBUOrFQ+Dggkb6TgjI5jmKwS399LZm5/HyCRVDlFSGONSW0/nKNrXI/KdJonOjW64w4TEh2ABz7d6z3wbdBo57pjgTSkAnbyxZUc/nSEV1MZRayXElwlzHMuJIhHIhVnVZUCoF8EgDfUd2FKcV+HIotCBZ59TBI4VcAaypLkKWVd8E7nrVZhLXi3xnBEcKwkYdFI5d81D4U+KXui+oKoUjGM53zsfoN/WsVecOiit4ZpJQgn/EjwnRYzE8DAaQynzb7YNaCw4na2lssmoHXqZVXBJBY4+WMVNmBt7niGkYqEd5cPYXJt0jcfxAoJOScESjHUjfHc1g4rS4nsxdtey6jAk2gCGKNdUjqo1FW1DVGNjjI67Gu/iGsFaBbufw7gTgl10OrIzYuIxo0+CwUAnVnzjFL8dbv8PYveFcTSKNY3fW6qNRYs2WO7D5Zx8qYiu2lcHBCgjGRjPbA6Cs9Y8ZETLA4RnWMO7PLDCoOFOnVIRkjVvjJ5d6auOLyCL8T4lkkJk8JW8aecl8atIWGE6jjfY4pePneR19Zb4usPCuXA/K/nH/AFcx9c1UAVpuPztdQLOQMo7JlVkCOpIGpBIoYDYfmA61nri0KW0NyZVAmnmh0upCoIyB4hkXJxuAfLT/ADTnQJOBml7TmT3p294eRDHKLiFzLK0aRKHDMqjeVWcDKZ2yQuema6nB7hRqMEmB10kj6ip6/wCv0/qEm9dQ1AtjmCPcEfrUgaDjrVyOTSa7QzQDbEEVxR2qEMnQ/KjRjNSVd/EZUDr1qBqC8zUqSo4RWu+AeGapDMRsmy/5jz+g/Ws5w+0aWRUUbsce3c/KvrHCLBYY1jXkB9T1JquYXRmxTOpj1OPkNqsISFUZ65NAiXSMVJxlRWqDHir3r5tx64QcTkVPw1xPLE/hpOpcwyJDsmCdAVlBbOM5OOtbN3NU83Aw0jyLcXEXiEM6xSaFLhQoblnOFA54OKc9FWP+DOEeLYKjOyRXS3JMiLNoi0FlYSgSLGOQwuDnPKni88/D41jRSGK61z4SyQoWB55Kq4VSRzwxFO8Q+GJG8slvDfx74zIbW4B6F3iwknvpBxjnUOE/D0lrI4k/hpKgVYUlkkSMYIOHkOS2/TAqrYQEsocq8riHxLLhZZ49KhNdzJowWGAoGkb/AMor0l4s0F3MLh5nLWEjqZfFgiIvDiKGQAAjABIAxuNzTdhwC821XaxosMNsBFGpdobfV4JLSZCudW+xqU3B7tsQm9ZreSSHxRKAzqY5Na6CMAKfLkY6U/0HL6Yz8Ulcm2gVZwjIxL3TtZB5RIihf4SlWOWJwRgczSnDeAiG1aDVH4wmCSzQWcLymB0UEv8AiCCy6pVzIoOCMdKd+I+B3ct/dEvCizRrGJ10GUQ4yyBANmdtizfyjA51G5+GJ9a3jeHcXSzCRo8tHC8eAPBTJOgAqHGdtVLYFlw+S5isbmCIiSS0ka2jcJu6xrHlvDJ3cBmGM4JXpmkeCcItp7ZbdjLGukxmVyLeVmVxGdUPik8psYYY37kGtL8NWkkUbtMV8WaWSeQL+VWkOdKnqAMDPpVDxC2uTK6rZpJiWWQSzSqIWEhQqBHpZiy6R25c96mX3QQ4zDPFLaRxxyG5CyGGbxoseCroJUuFMSsU5c8nfYmpfGfGJ7WWKaOHWESTDkHwklk0xh5D0CqzHHXPpS8vEjbSxGeDwfAhuUIVy6ytPKsqeDqJbTsck4AJwNhWT4hxtriWZ5YDMj6fDRrmaJIwBggpGQHzz6U7ZptN8W8Vmh4ValbuzhZxc6kt0DLMCygrC4jYIcE6iSNyN6w9pERG0iYIiVSA24JJAVAOp5n5Grb/APo5AkUX4KwaOHV4ayRSy6dZBbDPJuSQN/Sl7+JnU3IWFI5H80cCssccoXG6EnBIPMbVHk6mfT5jcfDcdlcWgRXkRIo/A8dmFu7MjYGY/FbOPxZ5jGX9RSPxfYuEhtzFNLLpk8GQSxkxopRXSdTCrtECVO5Jy2c5rN8L4z+EjMLWqzMZXmy7jwtMscBUFCrZYeGD6VpuCNcXEX4qO3FtHDFdrI2sukolkR2WLUSwPkPYDYCtP1MLGX4jKLgyISFKzvI0rjMcUZXSWPdvIMIN2q1uZrcnhYillgtlgn8OVgrFG/ENGZ5ozsUYgZAxgNz2rMwQqyyMygt5Gz2OSCccs+auycXZo7SPQB+FjljJOCJRJKZNx2wQDnrWPis5lh9S1r/iW4PgyRzmKR4Jo1bQW8GcYWRQCpyAyMM4PlPtTE3EEbhLTJax/hAscJgQyIVkaYtcMZiC3h5EQDAnO+cVkOMXKSoscSCKMKfKox5m/Mf2pMXU2gr+IkClPCKggJ4eR5AgGkDIB5ZrSdwvy1/Gr6H8BYyrYWuqVJof4oeYrFCQI9Dsc/zfm9qylm7xgBJHUgAZVmUnA57Gm+Mcakm8FJTGEt4hFEI1wpGxaUjkGbA2GwxSsbA8jUd2df8AiufSwTjdyBp8ZmH+MLJ/rBqb8YZgA8MD47xAE/NCKRFeBFZf8fP+K2n2vLZvzWujbnHK23sjAg/Wlms0Y/wZNXXQ4Cv8v5W+RFAY0FqPxnyhKaJkOGUqezAg/Q01b+YZrkd/IBgnWP6XGpfoeR9RvR3TQQUwNSKxVjsNQz5WPTORjnRtn08JAEHcVNTTUnI0p1pj43XwFw7YzEc/KvsPzVt46quAoBDGAMDQP0FWgrSI6+nSmagdtq9EaPjemktJa5pWS3I6VbZrzjI3pkqoWxRb+2Eqf4l3X9x7GpTKM1OE1KqzUvEvDYA8qsHKsp21KcEjuO1UPxeMTHHv9hVnwdz4Y9qpJ/jU8YmjKxFNSYJIxkbaB7j96YhkGBXfi2QmOLJ9ftSUTUqFmZABWM+J/jRY8xwYdxzY/lX+5qs+P7+UERhyEI3A2z71iHNSuQW8unlcvI5dj1Jz9O1C10M14CkqOZqw4PerGWSUFoZBplUc8dGXsyncH3pJBvUmWp6kswQbjJImcnHmJZSORQ/kK+mMVt+BQ2zcGlAmk8Zy4KByFEmGCqF5YK4J7/KgcT4VCLOHyDZlwcnID6dQznke1anjlnHHwMqiKoCA7Drq557+tRx36w+o+VEJEroCHdhhiPyLghsL3OQN+VUmrnTsnKkB1q+ecLqnIWyKWvnwMdTUrU8/el74+b5Vc+lvpG3YMDqztyI6Z79xTMQK4PToRyNK2Y2k9h/qFWfAt5VjO6OcMp5HY/f1o69FB0lzXQaDpAYgcgTRKnVJk1CvGvCmHsUzf8oc8zCP9cmPtik5jtTPF2/iY6Kkaj0AQYFR19hx/9k=',
          designer: 'raven',
          style: '短髮'
        },
        {
          id: '3',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: 'erica',
          style: '直髮'
        },
        {
          id: '4',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: 'kevin',
          style: '捲髮'
        },
        {
          id: '5',
          imgurl:
            'https://cdn-images-1.medium.com/max/800/0*J6Non4YDjq1BPZrK.png',
          designer: '阿哲',
          style: '男士髮'
        },
        {
          id: '6',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: '邦晉',
          style: '長髮'
        },
        {
          id: '7',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: 'lily',
          style: '短髮'
        },
        {
          id: '8',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: 'raven',
          style: '直髮'
        },
        {
          id: '9',
          imgurl:
            'data:image/jpeg;base64,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',
          designer: 'erica',
          style: '捲髮'
        },
        {
          id: '10',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: 'kevin',
          style: '男士髮'
        },
        {
          id: '11',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: '阿哲',
          style: '長髮'
        },
        {
          id: '12',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: '邦晉',
          style: '短髮'
        },
        {
          id: '13',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: 'lily',
          style: '直髮'
        },
        {
          id: '14',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: 'raven',
          style: '捲髮'
        },
        {
          id: '15',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: 'erica',
          style: '男士髮'
        },
        {
          id: '16',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: 'kevin',
          style: '長髮'
        }
        // {
        //   id: '17',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: '阿哲',
        //   style: '短髮'
        // },
        // {
        //   id: '18',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: '邦晉',
        //   style: '直髮'
        // },
        // {
        //   id: '19',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'lily',
        //   style: '捲髮'
        // },
        // {
        //   id: '20',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'raven',
        //   style: '男士髮'
        // },
        // {
        //   id: '21',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'erica',
        //   style: '長髮'
        // },
        // {
        //   id: '22',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'kevin',
        //   style: '短髮'
        // },
        // {
        //   id: '23',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: '阿哲',
        //   style: '直髮'
        // },
        // {
        //   id: '24',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: '邦晉',
        //   style: '捲髮'
        // },
        // {
        //   id: '25',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'lily',
        //   style: '男士髮'
        // },
        // {
        //   id: '26',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'raven',
        //   style: '長髮'
        // },
        // {
        //   id: '27',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'erica',
        //   style: '短髮'
        // },
        // {
        //   id: '28',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'kevin',
        //   style: '直髮'
        // },
        // {
        //   id: '29',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: '阿哲',
        //   style: '捲髮'
        // },
        // {
        //   id: '30',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: '邦晉',
        //   style: '男士髮'
        // },
        // {
        //   id: '31',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'lily',
        //   style: '長髮'
        // },
        // {
        //   id: '32',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'raven',
        //   style: '短髮'
        // },
        // {
        //   id: '33',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'erica',
        //   style: '直髮'
        // },
        // {
        //   id: '34',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'kevin',
        //   style: '捲髮'
        // },
        // {
        //   id: '35',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: '阿哲',
        //   style: '男士髮'
        // },
        // {
        //   id: '36',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: '邦晉',
        //   style: '長髮'
        // },
        // {
        //   id: '37',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'lily',
        //   style: '短髮'
        // },
        // {
        //   id: '38',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'raven',
        //   style: '直髮'
        // },
        // {
        //   id: '39',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'erica',
        //   style: '捲髮'
        // },
        // {
        //   id: '40',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'kevin',
        //   style: '男士髮'
        // },
        // {
        //   id: '41',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: '阿哲',
        //   style: '長髮'
        // },
        // {
        //   id: '42',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: '邦晉',
        //   style: '短髮'
        // },
        // {
        //   id: '43',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'lily',
        //   style: '直髮'
        // },
        // {
        //   id: '44',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'raven',
        //   style: '捲髮'
        // },
        // {
        //   id: '45',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'erica',
        //   style: '男士髮'
        // },
        // {
        //   id: '46',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'kevin',
        //   style: '長髮'
        // },
        // {
        //   id: '47',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: '阿哲',
        //   style: '短髮'
        // },
        // {
        //   id: '48',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: '邦晉',
        //   style: '直髮'
        // },
        // {
        //   id: '49',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'lily',
        //   style: '捲髮'
        // },
        // {
        //   id: '50',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'raven',
        //   style: '男士髮'
        // }
      ]
    }
  },
  computed: {
    filterList: function() {
      console.log('有計算')
      let vm = this
      let selectDesigner = vm.selectDesigner
      let selectStyle = vm.selectStyle
      //selectDesigner &&
      if (selectDesigner && selectStyle === 'All') {
        console.log(selectStyle)
        console.log(selectDesigner)
        return vm.DesigneStyle
      } else if (selectStyle || selectDesigner != 'all') {
        return vm.DesigneStyle.filter(function(list) {
          console.log(selectStyle)
          console.log(selectDesigner)
          return list.style && list.designer === selectStyle && selectDesigner
        })
      }
    }
  },
  methods: {
    DesignerActive() {
      this.desActive = !this.desActive
    },
    HairActive() {
      this.hairActive = !this.hairActive
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/scss/global.scss';
.section-img {
  background: url('../../public/img/img_Work.jpg') center no-repeat;
  height: 410px;
  margin-bottom: 64px;
  //平板
  @include pad-width {
    margin-bottom: 18px;
  }
  //平板以下
  @include pad-and-phone-width {
    background: url('../../public/img/img_Work_pad.jpg') center no-repeat;
    margin-bottom: 18px;
    height: 288px;
  }
}
.container-body {
  max-width: 1440px;
}

.hair-style-list {
  display: inline-flex;
  margin-bottom: 36px;
  @include pc-width {
    margin-left: 10%;
  }
  //平板
  @include pad-width {
    display: flex;
    border-bottom: 1px solid #000;
    margin: auto;
  }
  //平板以下
  @include pad-and-phone-width {
    display: flex;
    border-bottom: 1px solid #000;
    margin: auto;
  }
  li {
    margin: auto 53px;
    //平板
    @include pad-width {
      margin: 0 auto 2.4% auto;
    }
    //平板以下
    @include pad-and-phone-width {
      margin: 0 auto 2.4% auto;
    }
  }
}
.designer-list {
  > h3 {
    line-height: 1.5;
    text-align: center;
    padding-bottom: 17px;
    border-bottom: solid 1px #707070;
    @include pad-width {
      display: none;
    }
    @include pad-and-phone-width {
      display: none;
    }
  }
  ul {
    //平板
    @include pad-width {
      display: flex;
    }
    //平板以下
    @include pad-and-phone-width {
      display: flex;
    }
    li {
      text-transform: capitalize;
      margin: 50px auto;
      //平板
      @include pad-width {
        display: inline-flex;
        margin: 2.4% auto 3% auto;
      }
      //平板以下
      @include pad-and-phone-width {
        display: inline-flex;
        margin: 2.4% auto 3% auto;
      }
    }
  }
}

.hair-style-sec {
  margin-top: 25px;
  margin-bottom: 20px;

  > div {
    position: relative;
    margin: auto;
    //電腦版
    @include pc-width {
      width: 270px;
    }
    //平板
    @include pad-width {
      width: 270px;
    }
    //小平板
    @include small-pad-width {
      width: 270px;
    }
    //手機
    @include phone-width {
      width: 270px;
    }

    span {
      position: absolute;
      right: 13px;
      bottom: 20px;
      font-size: 22px;
      text-transform: capitalize;
      color: $submain-T-Color;
    }
  }
}

.pagination-nav {
  nav {
    @media screen and (max-width: $pc-media) {
      display: inline-block;
    }
  }
  width: 100%;
  margin: 140px auto;
}
</style>
