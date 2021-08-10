import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "@/app/store/auth/auth.action";

import { ReactComponent as IconUpload } from "@/app/assets/svgs/icon-upload.svg";
import { ReactComponent as IconLoading } from "@/app/assets/svgs/icon-loading.svg";
import Form from "@/app/components/form";
import ModalService from "@/app/shared/services/modal";
import MessageNoticeService from "@/app/shared/services/message-notice";

import * as sc from "@/app/styles/base";
import * as s from "./styles";

const EditProfile = ({ title, visible, onCancel, currentUser }) => {
  const [isLoading, setLoading] = useState(false);
  const [banner, setBanner] = useState(currentUser.banner);
  const [preBanner, setPreBanner] = useState(currentUser.banner);
  const [profileImage, setProfileImage] = useState(currentUser.profileImage);
  const [preProfileImage, setPreProfileImage] = useState(
    currentUser.profileImage
  );
  const [name, setName] = useState(currentUser.name);
  const [bio, setBio] = useState(currentUser.bio);
  const [location, setLocation] = useState(currentUser.location);
  const [website, setWebsite] = useState(currentUser.website);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleEditUser = e => {
    e.preventDefault();

    setLoading(true);
    dispatch(
      editUser(currentUser.username, {
        name,
        bio,
        banner,
        profileImage,
        location,
        website,
      })
    )
      .then(res => {
        setLoading(false);
        setError("");
        onCancel();
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };

  const handleChangeBanner = e => {
    setPreBanner(URL.createObjectURL(e.target.files[0]));
    setBanner(e.target.files[0]);
  };

  const handleChangeProfileImage = e => {
    setPreProfileImage(URL.createObjectURL(e.target.files[0]));
    setProfileImage(e.target.files[0]);
  };

  const button = (
    <sc.Button
      type="submit"
      minheight="32px"
      minwidth="32px"
      pl="1em"
      pr="1em"
      bg="rgba(29, 161, 242, 1)"
      color="#fff"
      isLoading={isLoading}
      hovercolor
    >
      {isLoading && <IconLoading />} {isLoading ? "Saving" : "Save"}
    </sc.Button>
  );

  const content = (
    <>
      {error && MessageNoticeService.error(error)}
      <s.EditProfile>
        <s.BannerWrapper>
          <s.BannerImageWrapper src={preBanner ? preBanner : banner} />
          <s.BannerImageInputWrapper>
            <s.BannerImageInputInner>
              <s.BannerImageInputIconWrapper>
                <IconUpload />
              </s.BannerImageInputIconWrapper>
              <s.BannerImageInput
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleChangeBanner}
                name="banner"
              />
            </s.BannerImageInputInner>
          </s.BannerImageInputWrapper>
        </s.BannerWrapper>

        <s.AvatarWrapper>
          <s.AvatarInner>
            <s.AvatarImage src={preProfileImage} />
            <s.AvatarImageInputWrapper>
              <s.AvatarImageInputInner>
                <s.AvatarImageInputIconWrapper>
                  <s.AvatarImageInputIconWrapper>
                    <IconUpload />
                  </s.AvatarImageInputIconWrapper>
                  <s.AvatarImageInput
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    onChange={handleChangeProfileImage}
                    name="profileImage"
                  />
                </s.AvatarImageInputIconWrapper>
              </s.AvatarImageInputInner>
            </s.AvatarImageInputWrapper>
          </s.AvatarInner>
        </s.AvatarWrapper>

        <s.FormItem>
          <Form.TextBox label="Name">
            <Form.TextBoxInput
              name="name"
              value={name}
              error={error}
              onChange={e => setName(e.target.value)}
            />
          </Form.TextBox>
        </s.FormItem>

        <s.FormItem>
          <Form.TextBox label="Bio">
            <Form.TextArea
              name="bio"
              value={bio}
              error={error}
              onChange={e => setBio(e.target.value)}
            />
          </Form.TextBox>
        </s.FormItem>

        <s.FormItem>
          <Form.TextBox label="Location">
            <Form.TextBoxInput
              name="location"
              value={location}
              error={error}
              onChange={e => setLocation(e.target.value)}
            />
          </Form.TextBox>
        </s.FormItem>

        <s.FormItem>
          <Form.TextBox label="Website">
            <Form.TextBoxInput
              name="website"
              value={website}
              error={error}
              onChange={e => setWebsite(e.target.value)}
            />
          </Form.TextBox>
        </s.FormItem>
      </s.EditProfile>
    </>
  );

  return (
    <ModalService
      onSubmit={e => handleEditUser(e)}
      title={title}
      visible={visible}
      onCancel={onCancel}
      content={content}
      button={button}
    />
  );
};

export default EditProfile;
