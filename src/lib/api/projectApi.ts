import axios from "axios";
import {
  CreateProjectDto,
  UpdateProjectDto,
} from "../model/project/project.dto";
import { BackendRoutesEnum } from "../routes";
import { ProjectEntity } from "../model/project/project.entity";

const projectApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/${BackendRoutesEnum.PROJECTS}`,
  withCredentials: true,
});

export async function createProjectMutationFn({
  createProjectDto,
  accessToken,
}: {
  createProjectDto: CreateProjectDto;
  accessToken: string;
}) {
  const formData = new FormData();

  formData.append("title", createProjectDto.title);
  formData.append("image", createProjectDto.image);
  formData.append("address", createProjectDto.address);
  formData.append("description", createProjectDto.description);
  formData.append("fundingGoal", createProjectDto.fundingGoal.toString());
  formData.append(
    "fundingGoalDeadline",
    createProjectDto.fundingGoalDeadline.toString(),
  );
  formData.append("volunteerGoal", createProjectDto.volunteerGoal.toString());
  formData.append(
    "volunteerGoalDeadline",
    createProjectDto.volunteerGoalDeadline.toString(),
  );

  createProjectDto.objectives.forEach((object) => {
    formData.append("objectiveImages", object.objectiveImage);
    formData.append("objectiveDescriptions", object.objective!);
  });

  formData.append(
    "requirements",
    JSON.stringify(createProjectDto.requirements),
  );
  formData.append("organizerId", createProjectDto.organizerId);

  return await projectApi.post("/", formData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "multipart/form-data",
    },
  });
}

export async function updateProjectByIdMutationFn({
  id,
  updateProjectDto,
  accessToken,
}: {
  id: string;
  updateProjectDto: UpdateProjectDto;
  accessToken: string;
}) {
  const formData = new FormData();

  for (const key in updateProjectDto) {
    const value = updateProjectDto[key as keyof UpdateProjectDto];

    if (value !== undefined) {
      if (value instanceof Blob) {
        formData.append(key, value);
      } else if (
        typeof value === "object" &&
        value !== null &&
        !(value instanceof Date)
      ) {
        formData.append(key, JSON.stringify(value));
      } else {
        const stringValue = value === null ? "" : String(value);

        formData.append(key, stringValue);
      }
    }
  }

  return await projectApi.patch(`/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "multipart/form-data",
    },
  });
}

export async function getAllProjectsFn({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) {
  return await projectApi.get(`?page=${page}&limit=${limit}`);
}

export async function getProjectByIdFn(id: string) {
  return await projectApi.get(`/${id}`);
}

export async function getProjectsByOrganizerFn(organizerId: string) {
  return await projectApi.get(`/organizer/${organizerId}`);
}

export async function getProjectsByVolunteerFn(volunteerId: string) {
  return await projectApi.get(`/volunteer/${volunteerId}`);
}

export async function getProjectsByDonatorFn(donatorId: string) {
  return await projectApi.get(`/donator/${donatorId}`);
}

export async function getProjectTopDonationsFn(id: string) {
  return await projectApi.get(`top-donations/${id}`);
}

export async function getPopularProjectsFn() {
  return await projectApi.get(`/popular`);
}

export async function getLatestProjectsFn() {
  return await projectApi.get(`/latest`);
}

export async function getProjectData(
  id: string,
): Promise<ProjectEntity | null> {
  try {
    const res = await getProjectByIdFn(id);

    if (res.status === 200) {
      return res.data as ProjectEntity;
    }
  } catch (error) {
    return null;
  }

  return null;
}

export async function getPopularProjects(): Promise<ProjectEntity[] | null> {
  try {
    const res = await getPopularProjectsFn();

    if (res.status === 200) {
      return res.data as ProjectEntity[];
    }
  } catch (error) {
    return null;
  }

  return null;
}
