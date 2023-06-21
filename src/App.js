import React, { Component } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { Searchbar } from "./components/Searchbar/Searchbar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { fetchImages } from "./api/index";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      images: [],
      page: 1,
      loading: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState(
        {
          loading: true,
          hasMoreImages:false,
        },
        this.getImages
      );
    }
  }

  getImages() {
    const { query, page } = this.state;
    if (query !== "") {
      fetchImages({ query, pageNumber: page })
        .then((data) => {
          if (!data.hits.length) {
            return toast.error(
              "Sorry, there are no images matching your search query. Please try again."
            );
          }

          if (this.state.images.length && data.hits.length < 12) {
            toast.warn(`That's the lest batch of pictures`);
          }

          this.setState((prevState) => ({
            loading: false,
            images: [...prevState.images, ...data.hits],
            hasMoreImages: data.hits.length >= 12
          }));
        })
        .catch((message) => {
          toast.error(`Sorry, there is no more picture`);
        })
        .finally(() => this.setState({ loading: false }));
    }
  }

  handleOnSubmit = (query) => {
    this.setState({
      query: query,
      images: [],
      page: 1
    });
  };

  handleOnClickMoreImages = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1
    }));
  };

  render() {
    const { images, hasMoreImages, loading } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleOnSubmit} />
        <ImageGallery
          images={images}
          isLoading={loading}
          hasMoreImages={hasMoreImages}
          onClickMoreImages={this.handleOnClickMoreImages}
        />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
