import { locationStore } from "../store/LocationStore";
import HintField from "./HintField";
import { LocationItemProps } from "../types/types";
import InfoField from "./InfoField";
import SelectField from "./SelectField";
import {
  HeaderIcon,
  LocationIcon,
  EnvIcon,
  ServerIcon,
  StatusServerIcon,
  HintIcon,
  DeleteIcon,
} from "../assets";
import {
  FormContainer,
  FormHeader,
  IconWrapper,
  Icon,
  DeleteButton,
} from "../styles/GlobalStyles.styles";

const LocationItem = ({ form, onChange, onRemove }: LocationItemProps) => {
  const environments = locationStore.getEnvironmentsByLocation(form.locationID);
  const servers = locationStore.getServersByLocation(form.locationID);
  const serverStatus = locationStore.getServerStatus(form.locationID);

  return (
    <FormContainer>
      <FormHeader>
        <IconWrapper>
          <Icon src={HeaderIcon} alt="Header" />
        </IconWrapper>
        Тестовая Локация {form.id.slice(0, 8)}
      </FormHeader>

      <SelectField
        value={form.locationID}
        onChange={(value) => onChange("locationID", value)}
        options={locationStore.locations}
        label="Локация"
        icon={LocationIcon}
        lastChar="ю"
      />

      <SelectField
        value={form.envID}
        onChange={(value) => onChange("envID", value)}
        options={environments}
        label="Среда"
        icon={EnvIcon}
        lastChar="у"
        disabled={!form.locationID}
      />

      <InfoField label="Серверы" value={servers} icon={ServerIcon} />

      <InfoField
        label="Статус серверов"
        value={serverStatus}
        icon={StatusServerIcon}
      />

      <HintField
        value={form.hint}
        onChange={(value) => onChange("hint", value)}
        placeholder="Комментарий по локации"
        icon={HintIcon}
      />

      <DeleteButton onClick={onRemove}>
        <Icon src={DeleteIcon} alt="Delete" />
      </DeleteButton>
    </FormContainer>
  );
};

export default LocationItem;
