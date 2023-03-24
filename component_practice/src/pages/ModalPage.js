import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal((current) => !current);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <div>Passing in children prop</div>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut
        tortor a lectus viverra consectetur a non risus. Sed vitae neque et
        sapien dictum vestibulum ac in nibh. Duis blandit sagittis commodo.
        Aenean rhoncus laoreet massa, vel cursus libero scelerisque eu. Proin
        congue fringilla mi et congue. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Etiam gravida, mi eu gravida iaculis, lectus tortor
        sodales turpis, et venenatis elit enim sit amet libero. Integer at nisl
        a eros egestas malesuada in vehicula felis. Suspendisse elementum luctus
        tortor ac mattis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut
        tortor a lectus viverra consectetur a non risus. Sed vitae neque et
        sapien dictum vestibulum ac in nibh. Duis blandit sagittis commodo.
        Aenean rhoncus laoreet massa, vel cursus libero scelerisque eu. Proin
        congue fringilla mi et congue. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Etiam gravida, mi eu gravida iaculis, lectus tortor
        sodales turpis, et venenatis elit enim sit amet libero. Integer at nisl
        a eros egestas malesuada in vehicula felis. Suspendisse elementum luctus
        tortor ac mattis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut
        tortor a lectus viverra consectetur a non risus. Sed vitae neque et
        sapien dictum vestibulum ac in nibh. Duis blandit sagittis commodo.
        Aenean rhoncus laoreet massa, vel cursus libero scelerisque eu. Proin
        congue fringilla mi et congue. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Etiam gravida, mi eu gravida iaculis, lectus tortor
        sodales turpis, et venenatis elit enim sit amet libero. Integer at nisl
        a eros egestas malesuada in vehicula felis. Suspendisse elementum luctus
        tortor ac mattis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut
        tortor a lectus viverra consectetur a non risus. Sed vitae neque et
        sapien dictum vestibulum ac in nibh. Duis blandit sagittis commodo.
        Aenean rhoncus laoreet massa, vel cursus libero scelerisque eu. Proin
        congue fringilla mi et congue. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Etiam gravida, mi eu gravida iaculis, lectus tortor
        sodales turpis, et venenatis elit enim sit amet libero. Integer at nisl
        a eros egestas malesuada in vehicula felis. Suspendisse elementum luctus
        tortor ac mattis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut
        tortor a lectus viverra consectetur a non risus. Sed vitae neque et
        sapien dictum vestibulum ac in nibh. Duis blandit sagittis commodo.
        Aenean rhoncus laoreet massa, vel cursus libero scelerisque eu. Proin
        congue fringilla mi et congue. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Etiam gravida, mi eu gravida iaculis, lectus tortor
        sodales turpis, et venenatis elit enim sit amet libero. Integer at nisl
        a eros egestas malesuada in vehicula felis. Suspendisse elementum luctus
        tortor ac mattis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut
        tortor a lectus viverra consectetur a non risus. Sed vitae neque et
        sapien dictum vestibulum ac in nibh. Duis blandit sagittis commodo.
        Aenean rhoncus laoreet massa, vel cursus libero scelerisque eu. Proin
        congue fringilla mi et congue. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Etiam gravida, mi eu gravida iaculis, lectus tortor
        sodales turpis, et venenatis elit enim sit amet libero. Integer at nisl
        a eros egestas malesuada in vehicula felis. Suspendisse elementum luctus
        tortor ac mattis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut
        tortor a lectus viverra consectetur a non risus. Sed vitae neque et
        sapien dictum vestibulum ac in nibh. Duis blandit sagittis commodo.
        Aenean rhoncus laoreet massa, vel cursus libero scelerisque eu. Proin
        congue fringilla mi et congue. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Etiam gravida, mi eu gravida iaculis, lectus tortor
        sodales turpis, et venenatis elit enim sit amet libero. Integer at nisl
        a eros egestas malesuada in vehicula felis. Suspendisse elementum luctus
        tortor ac mattis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut
        tortor a lectus viverra consectetur a non risus. Sed vitae neque et
        sapien dictum vestibulum ac in nibh. Duis blandit sagittis commodo.
        Aenean rhoncus laoreet massa, vel cursus libero scelerisque eu. Proin
        congue fringilla mi et congue. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Etiam gravida, mi eu gravida iaculis, lectus tortor
        sodales turpis, et venenatis elit enim sit amet libero. Integer at nisl
        a eros egestas malesuada in vehicula felis. Suspendisse elementum luctus
        tortor ac mattis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut
        tortor a lectus viverra consectetur a non risus. Sed vitae neque et
        sapien dictum vestibulum ac in nibh. Duis blandit sagittis commodo.
        Aenean rhoncus laoreet massa, vel cursus libero scelerisque eu. Proin
        congue fringilla mi et congue. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Etiam gravida, mi eu gravida iaculis, lectus tortor
        sodales turpis, et venenatis elit enim sit amet libero. Integer at nisl
        a eros egestas malesuada in vehicula felis. Suspendisse elementum luctus
        tortor ac mattis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut
        tortor a lectus viverra consectetur a non risus. Sed vitae neque et
        sapien dictum vestibulum ac in nibh. Duis blandit sagittis commodo.
        Aenean rhoncus laoreet massa, vel cursus libero scelerisque eu. Proin
        congue fringilla mi et congue. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Etiam gravida, mi eu gravida iaculis, lectus tortor
        sodales turpis, et venenatis elit enim sit amet libero. Integer at nisl
        a eros egestas malesuada in vehicula felis. Suspendisse elementum luctus
        tortor ac mattis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut
        tortor a lectus viverra consectetur a non risus. Sed vitae neque et
        sapien dictum vestibulum ac in nibh. Duis blandit sagittis commodo.
        Aenean rhoncus laoreet massa, vel cursus libero scelerisque eu. Proin
        congue fringilla mi et congue. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Etiam gravida, mi eu gravida iaculis, lectus tortor
        sodales turpis, et venenatis elit enim sit amet libero. Integer at nisl
        a eros egestas malesuada in vehicula felis. Suspendisse elementum luctus
        tortor ac mattis.
      </p>
    </div>
  );
}

export default ModalPage;
