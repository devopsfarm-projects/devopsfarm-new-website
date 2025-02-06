"use client";
import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";

export default function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "ubuntu",
    link: "https://ubuntu.com/",
    thumbnail:
      "/heroSection/ubuntu.png",
  },
  {
    title: "dokcker",
    link: "https://www.docker.com/",
    thumbnail:
    "/heroSection/docker.png",
  },
  {
    title: "python",
    link: "https://www.python.org/",
    thumbnail:
    "/heroSection/python.png",
  },

  {
    title: "github",
    link: "https://github.com/",
    thumbnail:
    "/heroSection/github.png",
  },
  {
    title: "terraform",
    link: "https://www.terraform.io/",
    thumbnail:
    "/heroSection/terraform.png",
  },
  {
    title: "kubernetes",
    link: "https://kubernetes.io/",
    thumbnail:
    "/heroSection/kubernetes.png",
  },

  {
    title: "Java",
    link: "https://www.java.com/en/",
    thumbnail:
    "/heroSection/java.png",
  },
  {
    title: "Ansible",
    link: "https://docs.ansible.com/",
    thumbnail:
    "/heroSection/ansible.png",
  },
  {
    title: "AWS",
    link: "https://aws.amazon.com/free/?trk=16847e0c-46fb-467d-91ee-6e259e339665&sc_channel=ps&s_kwcid=AL!4422!10!71056165983499!71056716413948&ef_id=521d0b7405bc1785de826cd08704adf0:G:s&msclkid=521d0b7405bc1785de826cd08704adf0&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all",
    thumbnail:
    "/heroSection/aws.png",
  },
  {
    title: "Jenkins",
    link: "https://www.jenkins.io/",
    thumbnail:
    "/heroSection/jenkins.png",
  },
  {
    title: "MySQL",
    link: "https://www.mysql.com/",
    thumbnail:
    "/heroSection/mysql.png",
  },

  {
    title: "Azure",
    link: "https://azure.microsoft.com/en-in",
    thumbnail:
    "/heroSection/azure.png",
  },
  {
    title: "GCP",
    link: "https://cloud.google.com/",
    thumbnail:
    "/heroSection/gcp.png",
  },
  {
    title: "MongoDB",
    link: "https://www.mongodb.com/",
    thumbnail:
    "/heroSection/mongoDB.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
    "/heroSection/ubuntu.png",
  },
];
