using AutoMapper;
using BackTFG2024.DTOs;
using BackTFG2024.Models;

namespace BackTFG2024.Utilidades
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<NewYearDTO, Year>()
                .ForMember(x => x.Country, x => x.MapFrom(dto => new CountryDetail(dto.Country_id, dto.Country_name)));
            CreateMap<YearDTO, Year>()
                .ForMember(x => x.Country, x => x.MapFrom(dto => new CountryDetail(dto.Country_id!, dto.Country_name!)));
            CreateMap<Year, YearCard>();


            CreateMap<NewCountryDTO, Country>()
                .ForMember(x => x.CountryDetail, x => x.MapFrom(dto => new CountryDetail(dto.Country_id!, dto.Country_name!)));
            CreateMap<CountryDTO, Country>()
                .ForMember(x => x.CountryDetail, x => x.MapFrom(dto => new CountryDetail(dto.Country_id!, dto.Country_name!)));
            CreateMap<Country, CountryCard>();


            CreateMap<NewSongDTO, Song>()
                .ForMember(x => x.Country, x => x.MapFrom(dto => new CountryDetail(dto.Country_id!, dto.Country_name!)))
                .ForMember(x => x.Candidature, x => x.MapFrom(dto => new Candidature(dto.Song_title, dto.Performer, dto.Img_disc, dto.Img_performer, dto.Composers, dto.Lyricists, dto.Lyrics)))
                .ForMember(x => x.Performance_sf, x => x.MapFrom(dto => new Performance_sf(dto.Running_sf, dto.Place_sf, dto.Points_sf, dto.Points_tele_sf, dto.Points_jury_sf)))
                .ForMember(x => x.Performance_final, x => x.MapFrom(dto => new Performance_final(dto.Running_final, dto.Place_final, dto.Points_final, dto.Points_tele_final, dto.Points_jury_final)));
            CreateMap<SongDTO, Song>()
                .ForMember(x => x.Country, x => x.MapFrom(dto => new CountryDetail(dto.Country_id!, dto.Country_name!)))
                .ForMember(x => x.Candidature, x => x.MapFrom(dto => new Candidature(dto.Song_title, dto.Performer, dto.Img_disc, dto.Img_performer, dto.Composers, dto.Lyricists, dto.Lyrics)))
                .ForMember(x => x.Performance_sf, x => x.MapFrom(dto => new Performance_sf(dto.Running_sf, dto.Place_sf, dto.Points_sf, dto.Points_tele_sf, dto.Points_jury_sf)))
                .ForMember(x => x.Performance_final, x => x.MapFrom(dto => new Performance_final(dto.Running_final, dto.Place_final, dto.Points_final, dto.Points_tele_final, dto.Points_jury_final)));
            CreateMap<Song, SongCard>()
                .ForMember(x => x.Song_title, x => x.MapFrom(song => song.Candidature!.Song_title))
                .ForMember(x => x.Performer, x => x.MapFrom(song => song.Candidature!.Performer))
                .ForMember(x => x.Img_disc, x => x.MapFrom(song => song.Candidature!.Img_disc));

            CreateMap<NewCommentDTO, Comment>();
            CreateMap<CommentDTO, Comment>();
            CreateMap<Comment, GetCommentDTO>();


            CreateMap<User, UserDTO>();
            CreateMap<NewUserDTO, User>()
                .ForMember(x => x.Role, x => x.MapFrom(dto => dto.Role != null ? dto.Role : "user"));
        }

    }
}
