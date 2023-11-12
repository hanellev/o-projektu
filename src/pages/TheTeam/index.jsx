import HanaPhoto from './img/hana_photo.jpg';
import LizaPhoto from './img/IMG_1366.jpg';

export const TheTeam = () => {
  return (
    <div>
      <div className="container-co container-fluid">
        <div className=" fw-light">
          <p> </p>
          <h2 className="fw-semibold fs-3">About us</h2>
          <p className="fw-light">
            {' '}
            We are a team of two girls who want to make informed decisions about
            the products we use and help others to do the same.
          </p>
          <div className="card-group">
            <div className="card">
              <img
                className="card-img-top"
                src={HanaPhoto}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title fw-semibold fs-4">Hana Vavrušková</h5>
                <p className="card-text fw-light">
                  Původně mám vystudovanou anglistiku a k IT jsem se dostala
                  náhodou, když jsem začala pracovat na marketingovém oddělení
                  ve Škoda Auto. Od té doby jsem se vzdělávala v různých skills,
                  dokud jsem se nepřesvědčila, že web mě baví ze všeho nejvíc! I
                  initially came up with the idea for this project, and it
                  turned out that I wasn't the only one who was looking for the
                  solution.
                </p>
                <div className="card-link">
                  <a
                    href="https://github.com/hanellev/o-projektu"
                    className="btn btn-outline-success"
                  >
                    GitHub link
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src={LizaPhoto}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title fw-semibold fs-4">Liza Povkh</h5>
                <p className="card-text fw-light">
                  I've been working in finance for what it seems like forever,
                  so numbers are an easy read for me. But when it comes to
                  reading chemical ingredients - that's when things become
                  difficult. Nevertheless, we cannot just ignore things we don't
                  understand. So I was very excited about this idea to use
                  technology to solve this problem for myself, and at the same
                  time help others live their better lives!
                </p>
                <div className="card-link">
                  <a
                    href="https://github.com/Leani3"
                    className="btn btn-outline-info"
                  >
                    GitHub link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
